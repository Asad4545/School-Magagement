using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Teacher
    {
        //PrimaryKey
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TeacherId { get; set; }
        public string TeacherName { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Id { get; set; }
        public string Phone { get; set; }
        public Classes? classes { get; set; }
        public TeacherAddress? teacherAddress { get; set; }
        public ICollection<TeacherAttendance>? teacherAttendances { get; set; }

    }
}
