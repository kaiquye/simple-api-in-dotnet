using server.src.Models.entity.structure;

namespace server.src.Models.entity
{
    public class AddressEntity : EntityBase
    {
        public string street { get; set; }
        public string zip_code { get; set; }
        public string city { get; set; }
        public int userId { get; set; }
        public User user { get; set; }
    }
}