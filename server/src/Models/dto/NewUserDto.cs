using FluentValidation;
using server.src.Models.entity;
using server.src.Models.entity.structure;

namespace server.src.Models.dto
{
    public class NewUserDtoValidation : AbstractValidator<NewUserDtoReq>
    {
        public NewUserDtoValidation()
        {
            RuleFor(dto => dto.fist_name)
            .NotEmpty();
            RuleFor(dto => dto.last_name)
           .NotEmpty();
            RuleFor(dto => dto.email)
           .NotEmpty();
            RuleFor(dto => dto.password)
                .MinimumLength(8).WithMessage("Your password length must be at least 8.")
                .MaximumLength(16).WithMessage("Your password length must not exceed 16.")
                .Matches(@"[A-Z]+").WithMessage("Your password must contain at least one uppercase letter.")
                .Matches(@"[a-z]+").WithMessage("Your password must contain at least one lowercase letter.")
                .Matches(@"[0-9]+").WithMessage("Your password must contain at least one number.")
                .Matches(@"[\@\*\.]+").WithMessage("Your password must contain at least one (@ *.).");
            RuleFor(dto => dto.address.street)
           .NotEmpty();
            RuleFor(dto => dto.address.zip_code)
           .NotEmpty();
            RuleFor(dto => dto.address.city)
           .NotEmpty();
        }
    }
    public class NewUserDtoReq
    {
        public string fist_name { get; set; }
        public string? last_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public virtual Address address { get; set; }
    }
}