using System;
using System.Collections.Generic;
using System.Linq;

namespace Code
{
  class Program
  {
    // The Fibonacci sequence
    public static IEnumerable<int> Fibonacci()
    {
      int a = 0;
      int b = 1;

      while (true)
      {
        yield return a;
        yield return b;
        a += b;
        b += a;
      }
    }

    static void Main(string[] args)
    {
      // print the 10 first Fibonacci numbers
      foreach (var it in Fibonacci().Take(10))
      {
        Console.WriteLine(it);
      }
    }
  }
}
