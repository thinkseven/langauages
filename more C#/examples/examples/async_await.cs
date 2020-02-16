using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace examples
{
    public class AsyncProgramming1
    {
        public void MainFunction()
        {
            Example();
            Console.WriteLine("Main Function");
        }

        private async void Example()
        {
            // This method runs asynchronously.
            await Task.Run(() => SlowFunction());
            Console.WriteLine("Example Function");
        }

        private void SlowFunction()
        {
            for(int i=0; i<10; i++)
            {
                Thread.Sleep(1000);
            }
        }
    }
}
