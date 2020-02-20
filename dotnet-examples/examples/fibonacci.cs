using System;

namespace examples
{
    public static class fibonanci
    {
        public static int get(int i)
        {
            if (i <= 1)
            {
                return i;
            }
            return (get(i - 1) + get(i - 2));
        }
    }
}
