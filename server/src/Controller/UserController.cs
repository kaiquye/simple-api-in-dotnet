using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.src.common.error;
using server.src.Models.dto;
using server.src.Models.entity;
using server.src.Services.structure;

namespace server.src.Controller
{
    [ApiController]
    [Route("v1/user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Authorize]
        public async Task<Result> create(NewUserDtoReq data)
        {
            return await _userService.create(data);
        }
        [HttpPost]
        [Route("login")]

        public async Task<Result> login(LoginDto login)
        {
            return await _userService.login(login);
        }
    }
}