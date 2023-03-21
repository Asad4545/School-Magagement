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
    public class FeeManager : IFeeManager
    {
        private readonly DatabaseContext dbObj;

        public FeeManager(DatabaseContext dbObj)
        {
            this.dbObj = dbObj;

        }

        public Fees getFee(int id)
        {
            var FeeGet = dbObj.fees.FirstOrDefault(s => s.Fee_Id== id);
            return (FeeGet);
        }
        public List<Fees> getAllFee()
        {
            var getFeeAll = dbObj.fees.ToList();
            return (getFeeAll);
        }
        public Fees AddFee(Fees fees)
        {
            
            bool FeeCheck = dbObj.fees.Any(s => s.Fee_Id == fees.Fee_Id);

            if (FeeCheck == true)
            {
                dbObj.fees.Update(fees);

            }
            else
            {
                dbObj.fees.Add(fees);
            }
            dbObj.SaveChanges();

            return (fees);
        }
        public bool DeleteFee(int id)
        {
            bool feeDel = dbObj.fees.Any(s => s.Fee_Id == id);

            if (feeDel)
            {
                var del = new Fees();
                del.Fee_Id = id;
                dbObj.fees.Remove(del);
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

