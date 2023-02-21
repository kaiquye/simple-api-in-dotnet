using System.ComponentModel.DataAnnotations.Schema;
using server.src.Models.entity.structure;

namespace server.src.Models.entity
{
    public class Address : EntityBase
    {

        public string street { get; set; }
        public string zip_code { get; set; }
        public string city { get; set; }

        [ForeignKey("UserId")]
        public Guid? UserId { get; set; }
    }
}