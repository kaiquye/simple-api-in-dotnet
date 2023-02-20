using System.Text.RegularExpressions;
using FluentValidation;

namespace server.src.Models.dto
{

    public class LoginDtoValidation: AbstractValidator<LoginDto>
    {
        readonly Regex passRegex = new Regex("^[a-zA-Z0-9]*$");
        public LoginDtoValidation() {
            RuleFor(dto => dto.userName)
            .NotNull();
            
            RuleFor(dto => dto.password)
            .NotNull()
            .Matches(passRegex);
        }
    }
    public class LoginDto
    {
        public string userName { get; set; }
        public string password { get; set; }
    }
}