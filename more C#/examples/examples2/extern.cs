extern alias libv1;
extern alias libv2;

using libv1::lib;
using libv2::lib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace examples2
{
    public static class ExtensionClass1
    {
        public static int Add(this libv1.lib.Class1 cls, int int1, int int2)
        {
            Console.WriteLine("Extending libv1 class1 for int");
            return int1 + int2;
        }

        public static int Add(this libv2.lib.Class1 cls, int int1, int int2)
        {
            Console.WriteLine("Extending libv2 class1 for int");
            return int1 + int2;
        }
    }

    class DemoExtern
    {
        public void Add()
        {
            libv1.lib.Class1 cls1 = new libv1.lib.Class1();
            Console.WriteLine(cls1.Add("1", "2"));
            Console.WriteLine(cls1.Add(1,2));
            Console.WriteLine(cls1.Add(1.0, 2.0));
            Console.WriteLine(cls1.Add((float)1.0, (float)2.0));

            libv2.lib.Class1 cls2 = new libv2.lib.Class1();
            Console.WriteLine(cls2.Add("1", "2"));
            Console.WriteLine(cls2.Add(1, 2));
            Console.WriteLine(cls2.Add(1.0, 2.0));
            Console.WriteLine(cls2.Add(1.0, 2.0));
        }

    }
}
