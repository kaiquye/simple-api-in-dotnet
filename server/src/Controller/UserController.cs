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
        public async Task<Result> create(NewUserDto data)
        {
            return await _userService.create(data);
        }
    }
}