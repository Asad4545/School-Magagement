using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Repository;
using Models;
using Bussines.Interfaces;

namespace SchoolSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherManager TchService;
        public TeacherController(ITeacherManager TchService)
        {
            this.TchService = TchService;

        }

        [HttpPost ("UpdateTeacher")]
        public Teacher AddTeacher([FromForm]Teacher teacher)
        {
            return TchService.AddTeacher (teacher);
        }

        [HttpGet ("GetTeacher")]
        public Teacher GetTeacher(int id)
        {
            return TchService.getTeacher(id);
        }

        [HttpGet ("AllTeacher")]
        public List<Teacher> AllTeacher()
        {
            return TchService.getAllTeacher();
        }

        [HttpDelete ("DeleteTeacher")]
        public bool DeleteTeacher([FromQuery]int id)
        {
            return TchService.DeleteTeacher(id);
        }

        [HttpPost ("Login")]
        public bool Loginteacher(string email, string password)
        {
            return TchService.LoginStudent(email, password);
        }

    }
}
