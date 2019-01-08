using System;

namespace Code
{
  // a target class
  class Target
  {
    public bool TargetMethod(string arg)
    {
      // do something
      Console.WriteLine(arg);
      return true;
    }
  }

  class Program
  {
    delegate bool MethodReference(String arg);
    static void Main(string[] args)
    {
      // construct a target with the target method
      var target = new Target();

      // capture the delegate for later invocation
      // using generic delegate
      Func<string, bool> dlg = target.TargetMethod;

      // using create delegate
      MethodReference reference = new MethodReference(target.TargetMethod);

      // invoke the delegate
      bool result = dlg("Using func generic delegate");
      bool result2 = reference("Using created delegate");
    }
  }
}
