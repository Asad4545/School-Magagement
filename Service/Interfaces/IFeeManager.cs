using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussines.Interfaces
{
    public interface IFeeManager
    {
        public Fees getFee(int id);
        public List<Fees> getAllFee();
        public Fees AddFee(Fees fee);
        public bool DeleteFee(int id);
    }
}
