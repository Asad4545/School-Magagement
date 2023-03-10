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

        [HttpPost ("Update Teacher")]
        public Teacher AddTeacher(Teacher teacher)
        {
            return TchService.AddTeacher (teacher);
        }

        [HttpGet ("Get Teacher")]
        public Teacher GetTeacher(int id)
        {
            return TchService.getTeacher(id);
        }

        [HttpGet ("Get All Teacher")]
        public List<Teacher> AllTeacher()
        {
            return TchService.getAllTeacher();
        }

        [HttpDelete ("Delete Teacher")]
        public bool DeleteTeacher(int id)
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
