using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Classes
    {
        [Key]

        public int Id { get; set; }
        public string Class_Name { get; set; }
        public List<Student>? Students { get; set; }

        public List<Teacher>? Teachers { get; set; }
    }
}
