using server.src.Models.entity;

namespace server.src.Database.Repository.structure
{
    public interface IUserRep
    {
        public Task<User> save(User user);
        public Task<bool> emailExists(string email);
    }
}