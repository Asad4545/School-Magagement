using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bussines.Interfaces
{
    public interface IClasseManager
    {
        public Classes getClass(int id);
        public List<Classes> getAllClasses();
        public Classes AddClass(Classes classes);
        public bool DeleteClass(int id);
    }
}
