using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class StudenceAttendance
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Primary key
        public int AttendanceId { get; set; }

        // Foreign keys
        public int StudentId { get; set; }

        public DateTime Date { get; set; }
        public string AttendanceStatus { get; set; }

        public Student? student { get; set; }



    }
}
