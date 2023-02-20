using Microsoft.AspNetCore.Mvc;
using server.src.Models.dto;

namespace server.src.Controller
{
    [ApiController]
    [Route("v1/user")]
    public class UserController : ControllerBase
    {
        [HttpPost]
        public string create(LoginDto data) { return "tested"; }
    }
}