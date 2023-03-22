using Bussines.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Repository;

namespace SchoolSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly IClasseManager ClasService;
        public ClassController(IClasseManager ClasService)
        {
            this.ClasService = ClasService;

        }

        //ADD or UPDATE class

        [HttpPost("AddClass")]
        public Classes AddClass([FromForm]Classes classes)
        {
            return ClasService.AddClass(classes);
        }

        //GET all Classes

        [HttpGet ("AllClasses")]
        public List<Classes> AllClasses()
        {
           return ClasService.getAllClasses();
        }

        [HttpGet ("GetClass")]
        public Classes getClass(int id)
        {
            return ClasService.getClass(id);
        }

        //DELETE Class

        [HttpDelete("DeleteClass")]
        public bool DeleteClass([FromQuery]int id)
        {
            return ClasService.DeleteClass(id);
        }


    }
}
