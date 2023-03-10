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
    public class StudentManager : IStudentManager
    {
        private readonly DatabaseContext dbObj;

        public StudentManager(DatabaseContext dbObj)
        {
            this.dbObj = dbObj;

        }

        public Student getStudent(int id)
        {
            var getStudent = dbObj.Students.FirstOrDefault(s => s.StudentId == id);
            return (getStudent);
        }
        public List<Student> getAllStudent()
        {
            var getStudentAll = dbObj.Students.ToList();
            return (getStudentAll);
        }
        public Student AddStudent(Student student)
        {
            // add the new student to the Students DbSet

            bool StdCheck = dbObj.Students.Any(s => s.StudentId == student.StudentId);

            if (StdCheck == true)
            {
                dbObj.Students.Update(student);

            }
            else
            {
                dbObj.Students.Add(student);
            }
            dbObj.SaveChanges();

            return (student);
        }
        public bool DeleteStudent(int id)
        {
            bool StdCheck = dbObj.Students.Any(s => s.StudentId == id);

            if (StdCheck)
            {
                var del = new Student();
                del.StudentId = id;
                dbObj.Students.Remove(del);
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
            var login = dbObj.Students.Any(l => l.Email == email && l.Password == password);
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
