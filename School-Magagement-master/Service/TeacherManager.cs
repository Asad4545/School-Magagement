using Bussines.Interfaces;
using Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussines
{
    public class TeacherManager : ITeacherManager
    {
        private readonly DatabaseContext dbObj;

        public TeacherManager(DatabaseContext dbObj)
        {
            this.dbObj = dbObj;

        }

        public Teacher getTeacher(int id)
        {
            var TchGet = dbObj.teachers.FirstOrDefault(s => s.TeacherId == id);
            return (TchGet);
        }
        public List<Teacher> getAllTeacher()
        {
            var getTeacherAll = dbObj.teachers.ToList();
            return (getTeacherAll);
        }
        public Teacher AddTeacher(Teacher teacher)
        {

            bool TchCheck = dbObj.teachers.Any(s => s.TeacherId == teacher.TeacherId);

            if (TchCheck == true)
            {
                dbObj.teachers.Update(teacher);

            }
            else
            {
                dbObj.teachers.Add(teacher);
            }
            dbObj.SaveChanges();

            return (teacher);
        }
        public bool DeleteTeacher(int id)
        {
            bool StdCheck = dbObj.teachers.Any(s => s.TeacherId == id);

            if (StdCheck)
            {
                var del = new Teacher();
                del.TeacherId = id;
                dbObj.teachers.Remove(del);
                var result = dbObj.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }

        }
        public bool LoginStudent(string email, string password)
        {
            var login = dbObj.teachers.Any(l => l.Email == email && l.Password == password);
            if (login == true)
            {
                return true;
            }
            else
            {
                return false;
            }

        }


    }
}
