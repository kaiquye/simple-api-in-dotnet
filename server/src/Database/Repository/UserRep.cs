using server.src.Database.Repository.structure;
using server.src.Models.entity;

namespace server.src.Database.Repository
{
    public class UserRep : IUserRep
    {
        public Task<User> save(User user)
        {
            throw new NotImplementedException();
        }
        public Task<User> emailExist(string email)
        {
            throw new NotImplementedException();
        }
    }
}
