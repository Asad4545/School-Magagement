using Bussines.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace SchoolSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly IAttendance AttService;

        
        public AttendanceController(IAttendance AttService)
        {
            this.AttService = AttService;

        }

        [HttpPost("Update Attendance")]
        public StudenceAttendance AddAttendance(StudenceAttendance studenceAttendance)
        {
            return AttService.AddStudentAtten(studenceAttendance);
        }

        [HttpGet("Get Attendance")]
        public StudenceAttendance GetStudenceAtte(int id)
        {
            return AttService.getStudentAtten(id);
        }

        [HttpGet("Get All Attendance")]
        public List<StudenceAttendance> AllAttendances()
        {
            return AttService.getAllStudentAtten();
        }

        [HttpDelete("Delete Attendance")]
        public bool DeleteAttendance(int id)
        {
            return AttService.DeleteStudentAtten(id);
        }
    }
}
