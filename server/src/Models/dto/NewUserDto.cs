using FluentValidation;
using server.src.Models.dto.structure;
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


    public class NewUserDtoRes : IDtoResponseBase<User>
    { }
}