using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public static class ExtensionClass2
{
    public static float Add(this lib.Class1 cls, float int1, float int2)
    {
        Console.WriteLine("Extending libv1 class1 for float");
        return int1 + int2;
    }
}

namespace lib
{
    public static class ExtensionClass1
    {
        public static double Add(this Class1 cls, double int1, double int2)
        {
            Console.WriteLine("Extending libv1 class1 for double");
            return int1 + int2;
        }
    }

    public class Class1
    {
        public string Add(string str1, string str2)
        {
            Console.WriteLine("i am from libv1.dll");
            return String.Format("{0}{1}",str1,str2);
        }
    }
}
