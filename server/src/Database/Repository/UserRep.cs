using server.src.Database.Connection;
using server.src.Database.Repository.structure;
using server.src.Models.entity;

namespace server.src.Database.Repository
{
    public class UserRep : IUserRep
    {
        private readonly ConnectionDb _postgres;
        public UserRep(ConnectionDb conn)
        {
            _postgres = conn;
        }
        public async Task<User> save(User user)
        {
            _postgres.user.Save(users);
            await _postgres.SaveChangesAsync();
        }
        public Task<User> emailExist(string email)
        {
            throw new NotImplementedException();
        }
    }
}
