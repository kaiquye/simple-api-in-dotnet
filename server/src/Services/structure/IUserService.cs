using server.src.Models.dto;
using server.src.Models.entity;
using server.src.Shared.error;

namespace server.src.Services.structure
{
    public interface IUserService
    {
        public Task<Result> create(NewUserDtoReq data);
        public Task<Result> login(LoginDto data);
        public Task<Result> getAll();
    }
}