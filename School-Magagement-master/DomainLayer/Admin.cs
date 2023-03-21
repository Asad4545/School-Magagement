using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Admin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Primary key
        public int Admin_Id { get; set; }
        public string Admin_Name { get; set; }
        public string Admin_Email { get; set; }
        public string Password { get; set; }
        public int Admin_Phone { get; set; }

    }
}
