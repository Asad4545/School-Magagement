using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class TeacherAddress
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Primary key
        public int AddressId { get; set; }

        // Foreign keys
        public int TeacherId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public Teacher? teacher { get; set; }

    }
}
