using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussines.Interfaces
{
    public interface IStudentManager
    {
        public Student getStudent(int id);
        public List<Student> getAllStudent();
        public Student AddStudent(Student student);
        public bool DeleteStudent(int id);
        public bool LoginStudent(string email, string password);
    }
}
