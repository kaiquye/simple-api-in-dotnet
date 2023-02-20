using server.src.Models.entity;

namespace server.src.Database.Repository.structure
{
    public interface IAdressRep
    {
        public Task<Address> findByUserId(string userId);
    }
}