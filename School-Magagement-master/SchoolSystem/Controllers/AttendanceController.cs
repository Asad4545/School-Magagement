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

        [HttpPost("UpdateAttendance")]
        public StudenceAttendance AddAttendance([FromQuery]StudenceAttendance studenceAttendance)
        {
            return AttService.AddStudentAtten(studenceAttendance);
        }

        [HttpGet("GetAttendance")]
        public StudenceAttendance GetStudenceAtte(int id)
        {
            return AttService.getStudentAtten(id);
        }

        [HttpGet("GetAllAttendance")]
        public List<StudenceAttendance> AllAttendances()
        {
            return AttService.getAllStudentAtten();
        }

        [HttpDelete("DeleteAttendance")]
        public bool DeleteAttendance(int id)
        {
            return AttService.DeleteStudentAtten(id);
        }
    }
}
