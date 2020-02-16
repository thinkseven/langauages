using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace examples
{
    public interface IEmployeAccess
    {
        void Read();
        void Add();
    }

    public interface IManagerAccess
    {
        void Modify();
        void Delete();
    }

    public class Access : IEmployeAccess, IManagerAccess
    {
        public void Read()
        {
            Console.WriteLine("Allow Read");
        }

        public void Add()
        {
            Console.WriteLine("Allow addition");
        }

        public void Modify()
        {
            Console.WriteLine("Allow modification");
        }

        public void Delete()
        {
            Console.WriteLine("Allow Delete");
        }
    }

    public class Employee
    {
        private IEmployeAccess access = null;

        public Employee(IEmployeAccess access)
        {
            this.access = access;
        }

        public void AllowMethods()
        {
            Console.WriteLine("Employee allowed to do the below actions only");
            this.access.Add();
            this.access.Read();
        }
    }

    public class Manager
    {
        private IManagerAccess access = null;

        public Manager(IManagerAccess access)
        {
            this.access = access;
        }

        public void AllowMethods()
        {
            Console.WriteLine("Employee allowed to do the below actions only");
            this.access.Modify();
            this.access.Delete();
        }
    }
}
