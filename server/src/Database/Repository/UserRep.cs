using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
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
            EntityEntry<User> saved = await _postgres.users.AddAsync(user);
            await _postgres.SaveChangesAsync();

            user.Id = saved.Entity.Id;
            user.password = null;
            return user;
        }
        public async Task<bool> emailExists(string email)
        {
            var id = await _postgres.users.Where(user => user.email == email).Select(user => new { Id = user.Id }).FirstOrDefaultAsync();
            if (id != null)
            {
                return true;
            }
            return false;
        }
    }
}
