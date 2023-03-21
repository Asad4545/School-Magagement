using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class TeacherAttendance
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Primary key
        public int AttendanceId { get; set; }

        // Foreign keys
        public int TeacherId { get; set; }

        public DateTime Date { get; set; }
        public string AttendanceStatus { get; set; }

        public Teacher? teacher { get; set; }
    }
}
