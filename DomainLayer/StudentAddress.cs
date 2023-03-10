using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class StudentAddress
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Primary key
        public int AddressId { get; set; }

        // Foreign keys
        public int StudentId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public Student? student { get; set; }

    }
}
