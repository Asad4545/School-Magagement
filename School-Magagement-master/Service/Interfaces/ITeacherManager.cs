using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussines.Interfaces
{
    public interface ITeacherManager
    {
        public Teacher getTeacher(int id);
        public List<Teacher> getAllTeacher();
        public Teacher AddTeacher(Teacher teacher);
        public bool DeleteTeacher(int id);
        public bool LoginStudent(string email, string password);
    }
}
