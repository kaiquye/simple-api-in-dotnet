using server.src.common.error;
using server.src.Models.dto;
using server.src.Models.entity;

namespace server.src.Services.structure
{
    public interface IUserService
    {
        public Task<Result> create(NewUserDtoReq data);
    }
}