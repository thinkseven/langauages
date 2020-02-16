using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace examples
{
    interface IReadOnlyAccess
    {
        void Read();
    }

    interface IModifyAccess: IReadOnlyAccess
    {
        void Modify();
    }

    interface ISuperAdmin: IModifyAccess
    {
        void Update();
        void Delete();
    }

    public class ManagerDirector : ISuperAdmin
    {
        public void Delete()
        {
            Console.WriteLine("Delete");
        }

        public void Modify()
        {
            Console.WriteLine("Modify");
        }

        public void Read()
        {
            Console.WriteLine("Read");
        }

        public void Update()
        {
            Console.WriteLine("Update");
        }
    }

    public class ExecutiveDirector : IReadOnlyAccess, IModifyAccess
    {
        public void Delete()
        {
            Console.WriteLine("Delete");
        }

        public void Modify()
        {
            Console.WriteLine("Modify");
        }

        public void Read()
        {
            Console.WriteLine("Read");
        }

        public void Update()
        {
            Console.WriteLine("Update");
        }
    }
}
