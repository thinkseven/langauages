namespace examples
{
    public static class Fibonanci
    {
        public static int fibonanci(int i)
        {
            if (i <= 1)
            {
                return i;
            }
            return (fibonanci(i - 1) + fibonanci(i - 2));
        }
    }
}