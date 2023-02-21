using System.Collections.ObjectModel;
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
            return user;
        }
        public Task<User> emailExist(string email)
        {
            throw new NotImplementedException();
        }
    }
}
