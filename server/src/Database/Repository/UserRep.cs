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
        public async Task<User?> emailExists(string email)
        {
            return await _postgres.users.Where(user => user.email == email).Select(user => new User { Id = user.Id, password = user.password, email = user.email }).FirstOrDefaultAsync();
        }

        public async Task<List<User>> findAll()
        {
            return await _postgres.users.Include(user => user.address).ToListAsync();
        }
    }
}
