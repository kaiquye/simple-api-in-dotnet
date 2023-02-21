using server.src.Models.entity.structure;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.src.Models.entity
{
    public class User : EntityBase
    {
        public string fist_name { get; set; }
        public string? last_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public Address? address { get; set; }
    }
}