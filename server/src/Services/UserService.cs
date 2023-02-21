using server.src.Database.Repository.structure;
using server.src.Models.dto;
using server.src.Models.entity;
using server.src.Services.structure;

namespace server.src.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRep _userRep;
        public UserService(IUserRep userRep)
        {
            _userRep = userRep;
        }

        public async Task<User> create(NewUserDto data)
        {
            User user = new User { fist_name = data.fist_name, email = data.email, password = data.password };
            user.address = new Address { city = data.address.city, street = data.address.street, zip_code = data.address.zip_code };
            
            User saved = await _userRep.save(user);
            return saved;
        }
    }
}