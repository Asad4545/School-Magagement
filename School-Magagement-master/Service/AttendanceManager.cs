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
    public class AttendanceManager : IAttendance
    {
        private readonly DatabaseContext dbObj;

        public AttendanceManager(DatabaseContext dbObj)
        {
            this.dbObj = dbObj;

        }

        public StudenceAttendance getStudentAtten(int id)
        {
            var getStudentAtt = dbObj.studenceAttendances.FirstOrDefault(s => s.AttendanceId == id);
            return (getStudentAtt);
        }
        public List<StudenceAttendance> getAllStudentAtten()
        {
            var getStudentAllAtte = dbObj.studenceAttendances.ToList();
            return (getStudentAllAtte);
        }
        public StudenceAttendance AddStudentAtten(StudenceAttendance studenceAttendance)
        {
            bool StdAttenCheck = dbObj.studenceAttendances.Any(s => s.AttendanceId == studenceAttendance.AttendanceId);

            if (StdAttenCheck == true)
            {
                dbObj.studenceAttendances.Update(studenceAttendance);

            }
            else
            {
                dbObj.studenceAttendances.Add(studenceAttendance);
            }
            dbObj.SaveChanges();

            return (studenceAttendance);
        }
        public bool DeleteStudentAtten(int id)
        {
            bool StdAttCheck = dbObj.studenceAttendances.Any(s => s.AttendanceId == id);

            if (StdAttCheck)
            {
                var del = new StudenceAttendance();
                del.AttendanceId = id;
                dbObj.studenceAttendances.Remove(del);
                var result = dbObj.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
