using System;

namespace examples
{
    public delegate void RefFun(int i);
    public interface IFun
    {
        void MakeFun(int i);
    }

    public class cFun : IFun
    {
        public void MakeFun(int i)
        {
            Console.WriteLine("Class fun " + Math.Sqrt(i));
        }

        public double MakeFun2(int i)
        {
            return Math.Sqrt(i);
        }
    }

    public struct sFun : IFun
    {
        public void MakeFun(int i)
        {
            Console.WriteLine("struct fun " + Math.Sqrt(i));
        }

        public double MakeFun2(int i)
        {
            return Math.Sqrt(i);
        }
    }

    public static class DelegatesDemo
    {
        public static dynamic InvokeFunc(Func<int, double> func, int arg)
        {
            return func(arg);
        }

        public static void InvokeAction(Action<int> action, int arg)
        {
            action(arg);
        }
    }
}