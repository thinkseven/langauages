using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace examples
{
    public abstract class OverrideDemo
    {
        public virtual void Sample()
        {
            Console.WriteLine("Parent");
        }

        public abstract void Sample2();
    }

    public class OverrideDemoChild : OverrideDemo
    {
        public override void Sample()
        {
            base.Sample();
            Console.WriteLine("Child..");
        }

        public override void Sample2()
        {
            Console.WriteLine("abstract override..");
        }
    }
}
