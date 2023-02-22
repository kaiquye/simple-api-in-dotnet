using Microsoft.AspNetCore.Identity;
using server.src.common.error;
using server.src.Database.Repository.structure;
using server.src.Models.dto;
using server.src.Models.entity;
using server.src.Services.structure;
using server.src.shared.security.token;

namespace server.src.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRep _userRep;
        public UserService(IUserRep userRep)
        {
            _userRep = userRep;
        }

        public async Task<Result> create(NewUserDtoReq data)
        {
            try
            {
                User emailExists = await _userRep.emailExists(data.email);
                if (emailExists != null)
                {
                    return Result.fail(409, "Error: the email entered is already registered", null);
                }

                User user = new User { fist_name = data.fist_name, email = data.email, password = data.password };
                user.address = new Address
                {
                    city = data.address.city,
                    street = data.address.street,
                    zip_code = data.address.zip_code
                };

                var passwordHasher = new PasswordHasher<User>();
                user.password = passwordHasher.HashPassword(user, user.password);

                User saved = await _userRep.save(user);

                return Result.success(201, saved);
            }
            catch
            {
                return Result.fail(500, "Error: internal error when creating a user", null);
            }
        }

        public async Task<Result> login(LoginDto data)
        {
            try
            {
                User user = await _userRep.emailExists(data.email);
                if (user == null)
                {
                    return Result.fail(404, "Error: login or password entered are not valider", null);
                }

                var passwordHasher = new PasswordHasher<User>();
                var passwordIsValid = Convert.ToBoolean(passwordHasher.VerifyHashedPassword(user, user.password, data.password));

                if (passwordIsValid == false)
                {
                    return Result.fail(404, "Error: login or password entered are not valider", null);
                }

                var token = Token.Generate(user);
                return Result.success(200, new { accessToken = token.accessToken, expiresin = token.expiresin }, null);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return Result.fail(500, "Error: internal error when login a user", null);
            }
        }
    }
}