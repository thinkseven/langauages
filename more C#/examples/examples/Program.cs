using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace examples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Understand 1: Linq");
            ClassRoom room = new ClassRoom();
            room.Find();

            Console.WriteLine("Understand 2: Fibonanci ");
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(Fibonanci.fibonanci(i) + ",");
            }

            cFun cf = new cFun();
            sFun sf = new sFun();

            Console.WriteLine("Understand 3: Self delegate");
            RefFun fun1 = new RefFun(cf.MakeFun);
            RefFun fun2 = new RefFun(sf.MakeFun);
            fun1(2);
            fun2(3);

            Console.WriteLine("Understand 4: void Action<T> delagate");
            Action<int> f1 = cf.MakeFun;
            Action<int> f2 = sf.MakeFun;
            f1(2);
            f2(3);

            Console.WriteLine("Understand 5: T Func<T in, T out> delagate");
            Func<int, double> f3 = cf.MakeFun2;
            Func<int, double> f4 = sf.MakeFun2;
            Console.WriteLine(f3(2));
            Console.WriteLine(f4(4));

            Console.WriteLine("Understand 6: InvokeFunc taking T Func<T in, T out> delagate");
            Console.WriteLine(DelegatesDemo.InvokeFunc(cf.MakeFun2, 2));
            Console.WriteLine(DelegatesDemo.InvokeFunc(sf.MakeFun2, 3));

            Console.WriteLine("Understand 7: InvokeAction taking void Action<T> delagate");
            DelegatesDemo.InvokeAction(cf.MakeFun, 2);
            DelegatesDemo.InvokeAction(sf.MakeFun, 2);

            Console.WriteLine("Understand 8: InvokeFunc taking T Func<T in, T out> delagate lambda exp");
            Console.WriteLine(DelegatesDemo.InvokeFunc((x) => Math.Sqrt(x), 2));

            Console.WriteLine("Understand 9: InvokeAction taking void Action<T> delagate lambda exp");
            DelegatesDemo.InvokeAction((x) =>
            {
                double result = Math.Sqrt(x);
                Console.WriteLine(result);
            }, 2);

            Console.WriteLine("Understand 10: InvokeFunc taking T Func<T in, T out> delagate delegate operator");
            Console.WriteLine(DelegatesDemo.InvokeFunc(delegate (int x) { return Math.Sqrt(x); }, 2));

            Console.WriteLine("Understand 11: InvokeAction taking void Action<T> delagate delegate operator");
            DelegatesDemo.InvokeAction(delegate (int x)
            {
                double result = Math.Sqrt(x);
                Console.WriteLine(result);
            }, 2);

            Console.WriteLine("Understand 12: Anonymous Type");
            var myAnonymousType = new
            {
                firstProperty = "First",
                secondProperty = 2,
                thirdProperty = true
            };

            Console.WriteLine("Understand 13: Volatile Demo");

            // Create the worker thread object. This does not start the thread.
            Worker workerObject = new Worker();
            Thread workerThread = new Thread(workerObject.DoWork);

            // Start the worker thread.
            workerThread.Start();
            Console.WriteLine("Main thread: starting worker thread...");

            // Loop until the worker thread activates.
            while (!workerThread.IsAlive) ;

            // Put the main thread to sleep for 1 millisecond to
            // allow the worker thread to do some work.
            Thread.Sleep(1);

            // Request that the worker thread stop itself.
            workerObject.RequestStop();

            // Use the Thread.Join method to block the current thread 
            // until the object's thread terminates.
            workerThread.Join();
            Console.WriteLine("Main thread: worker thread has terminated.");

            // Concept 1: Limiting fuctionality using interface
            Console.WriteLine("Understand 14: Limiting fuctionality using interface");
            Employee emp = new Employee(new Access());
            Manager mgr = new Manager(new Access());
            emp.AllowMethods();
            mgr.AllowMethods();

            // Concept 2: Inheriting Interfaces
            Console.WriteLine("Understand 15: Inheriting Interfaces");
            ManagerDirector director = new ManagerDirector();
            ExecutiveDirector ed = new ExecutiveDirector();
            director.Read();
            director.Modify();
            director.Update();
            director.Delete();

            // Concept 3: Static Constructor with Static Function
            Console.WriteLine("Understand 16: Static Constructor with Static Function");
            StaticExample.Initialize();
            StaticExample example = new StaticExample();
            example.Save();
            StaticExample.Initialize();

            // Concept 4: Same Method Interface
            Console.WriteLine("Undestand 17: Same Method Interface");
            ImplementAll all = new ImplementAll();
            all.Function1();
            all.Function2();
            all.Function2(1);
            all.Function2("Vinod Chandra");

            Console.WriteLine("Understand 18: Virtual Overide");
            OverrideDemo pDemo = new OverrideDemoChild();
            pDemo.Sample();

            OverrideDemoChild cDemo = new OverrideDemoChild();
            cDemo.Sample();

            Console.WriteLine("Understand 19: Logical operators and short-circuiting in C#");
            Short_Circuit.Evaluate();

            Console.WriteLine("Understand 20: WeakReference Class");
            WeakReferenceDemo demo = new WeakReferenceDemo();
            demo.Demo();

            Console.WriteLine("Understand 21: Event and Delegates");
            Login auth = new Login();
            LogAction action = new LogAction();
            ErrorHandler errors = new ErrorHandler();
            auth.RegisterEvents(action.TakeImpression);
            auth.RegisterEvents(errors.HandlerError);
            auth.Authenticate("userid", "password");
            auth.logout("userid", "sessionid");

            Console.WriteLine("Understand 22: Asynchronous Programming (async await)");
            AsyncProgramming1 p1 = new AsyncProgramming1();
            p1.MainFunction();


            Console.ReadLine();
        }
    }
}
