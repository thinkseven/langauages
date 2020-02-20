using System;
using Xunit;
using examples;

namespace examples.tests
{
    public class fibonanciTest
    {
        [Fact]
        public void Test1()
        {
            Assert.Equal(2, fibonanci.get(4));
        }
    }
}
