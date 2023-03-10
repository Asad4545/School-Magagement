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
    public class ClassManager :IClasseManager
    {
        private readonly DatabaseContext dbObj;

        public ClassManager(DatabaseContext dbObj)
        {
            this.dbObj = dbObj;

        }

        public Classes getClass(int id)
        {
            var getClasses = dbObj.classes.FirstOrDefault(s => s.Id == id);
            return (getClasses);

        }

        public List<Classes> getAllClasses()
        {
            var getClassesAll = dbObj.classes.ToList();
            return (getClassesAll);
        }

        public Classes AddClass(Classes classes)
        {
            bool check = dbObj.classes.Any(t => t.Id == classes.Id);
            if (check == true)
            {
                dbObj.classes.Update(classes);
            }
            else
            {
                dbObj.classes.Add(classes);
            }
            dbObj.SaveChanges();
            return (classes);
        }

        public bool DeleteClass(int id)
        {

            bool ClassCheck = dbObj.classes.Any(s => s.Id == id);

            if (ClassCheck)
            {
                var del = new Classes();
                del.Id = id;
                dbObj.classes.Remove(del);
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
