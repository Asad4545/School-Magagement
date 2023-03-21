using Bussines;
using Bussines.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace SchoolSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeeController : ControllerBase
    {
        private readonly IFeeManager FeeService;
        public FeeController(IFeeManager FeeService)
        {
            this.FeeService = FeeService;

        }


        [HttpPost("AddFee")]
        public Fees AddUpdateFee(Fees fees)
        {
            return FeeService.AddFee(fees);
        }

        [HttpGet("GetFee")]
        public Fees GetFees(int id)
        {
            return FeeService.getFee(id);
        }

        [HttpGet("GetAllFee")]
        public List<Fees> GetAllFee()
        {
            return FeeService.getAllFee();
        }

        [HttpDelete("DeleteFee")]
        public bool DeleteFee(int id)
        {
            return FeeService.DeleteFee(id);
        }
    }
}
