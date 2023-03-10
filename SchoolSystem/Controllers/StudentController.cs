using Bussines;
using Bussines.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Repository;
using System.Net.WebSockets;

namespace SchoolSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentManager StdService;
        public StudentController(IStudentManager StdService)
        {
            this.StdService = StdService;  

        }

        [HttpPost("AddStudent")]
        public Student AddUpdateStudent(Student student)
        {
            return StdService.AddStudent(student);
        }

        [HttpGet ("GetStudent")]
        public Student GetStudent(int id)
        { 
            return StdService.getStudent(id);
        }

        [HttpGet("GetAllStudent")]
        public List<Student> GetAllStudent()
        {
            return StdService.getAllStudent();
        }

        [HttpDelete ("DeleteStudent")]
        public bool DeleteStudent(int id)
        {
            return StdService.DeleteStudent(id);
        }

        [HttpPost("Login")]
        public bool Loginteacher(string email, string password)
        {
            return StdService.LoginStudent(email, password);
        }

    }
}
