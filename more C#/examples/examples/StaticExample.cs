using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace examples
{
    public class StaticExample
    {
        static StaticExample()
        {
            Console.WriteLine("Called only once, Static Constructor");
        }

        //static StaticExample(String hello)
        //{
        //    Console.WriteLine("Called only once, Static Constructor");
        //}

        public StaticExample()
        {
            Console.WriteLine("Explicit Constructor");
        }

        public static void Initialize()
        {
            Console.WriteLine("Static Initializing...");
        }

        public void Save()
        {
            Console.WriteLine("Instace Save..");
        }
    }
}
