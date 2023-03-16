using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Fees
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Primary key
        public int Fee_Id { get; set; }
        // Foreign keys
        public int StudentId { get; set; }
        public string Fee_Status { get; set; }

        /*public double Amount_Id { get; set; }*/

        public Student? student { get; set; }


    }
}
