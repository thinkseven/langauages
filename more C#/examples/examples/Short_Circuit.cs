using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace examples
{
    public class Short_Circuit
    {
        public static void Evaluate()
        {
            bool boolA;

            Console.WriteLine("| operator:");
            boolA = BooleanTrue() | BooleanFalse();

            Console.WriteLine("|| operator:");
            boolA = BooleanTrue() || BooleanFalse();

            //> | operator:
            //>   Executing BooleanTrue() = True
            //>   Executing BooleanFalse() = False
            //> || operator:
            //>   Executing BooleanTrue() = True

            Console.WriteLine("& operator:");
            boolA = BooleanFalse() & BooleanTrue();

            Console.WriteLine("&& operator:");
            boolA = BooleanFalse() && BooleanTrue();

            //> & operator:
            //>   Executing BooleanFalse() = False
            //>   Executing BooleanTrue() = True
            //> && operator:
            //>   Executing BooleanFalse() = False
        }
        public static bool BooleanFalse()
        {
            Console.WriteLine("   Executing BooleanFalse() = False");
            return false;
        }

        public static bool BooleanTrue()
        {
            Console.WriteLine("   Executing BooleanTrue() = True");
            return true;
        }
    }
}
