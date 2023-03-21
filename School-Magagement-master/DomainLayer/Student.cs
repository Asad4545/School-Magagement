using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Student
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int Id { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public StudentAddress? studentAddress { get; set; }
        public ICollection<StudenceAttendance>? studenceAttendances { get; set; }
        public ICollection<Fees>? Fees { get; set; }
        public Classes? classes { get; set; }



    }
}
