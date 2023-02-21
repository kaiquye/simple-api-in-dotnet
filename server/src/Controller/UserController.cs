using Microsoft.AspNetCore.Mvc;
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
        public async Task<IActionResult> create(NewUserDto data)
        {
            User user = await _userService.create(data);
            return Ok(user);
        }
    }
}