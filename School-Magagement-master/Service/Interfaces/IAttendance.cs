using System;
using Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussines.Interfaces
{
    public interface IAttendance
    {
        public StudenceAttendance getStudentAtten(int id);
        public List<StudenceAttendance> getAllStudentAtten();
        public StudenceAttendance AddStudentAtten(StudenceAttendance studenceAttendance);
        public bool DeleteStudentAtten(int id);
    }
}
