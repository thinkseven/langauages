using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace examples
{
    interface IInteface1
    {
        void Function1();
        void Function2();
        string Function2(int counter);
    }

    interface IInteface2
    {
        void Function1();
        void Function2();
        string Function2(String name);
    }

    public class ImplementAll : IInteface1, IInteface2
    {
        public void Function1()
        {
            Console.WriteLine("function1");
        }

        public void Function2()
        {
            Console.WriteLine("function2");
        }

        public string Function2(int counter)
        {
            Console.WriteLine("function2 int version");
            return "Hello, " + counter;
        }

        public string Function2(string name)
        {
            Console.WriteLine("function2 string version");
            return "Hello, " + name;
        }
    }
}
