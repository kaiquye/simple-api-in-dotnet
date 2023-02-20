using System.ComponentModel.DataAnnotations.Schema;

namespace server.src.Models.entity.structure
{
   public class EntityBase
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id {get; set;}
    }
}