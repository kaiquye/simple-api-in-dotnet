using System.Text.RegularExpressions;
using FluentValidation;

namespace server.src.Models.dto
{

    public class LoginDtoValidation : AbstractValidator<LoginDto>
    {
        public LoginDtoValidation()
        {
            RuleFor(dto => dto.email)
            .NotNull();

            RuleFor(dto => dto.password)
           .MinimumLength(8).WithMessage("Your password length must be at least 8.")
                    .MaximumLength(16).WithMessage("Your password length must not exceed 16.")
                    .Matches(@"[A-Z]+").WithMessage("Your password must contain at least one uppercase letter.")
                    .Matches(@"[a-z]+").WithMessage("Your password must contain at least one lowercase letter.")
                    .Matches(@"[0-9]+").WithMessage("Your password must contain at least one number.")
                    .Matches(@"[\@\*\.]+").WithMessage("Your password must contain at least one (@ *.).");
        }
    }
    public class LoginDto
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}