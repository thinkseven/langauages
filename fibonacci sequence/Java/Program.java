import java.util.*;
import java.util.stream.Stream;
import java.util.function.Supplier;

public class Program {
  public static void main(String[] args) {
    Stream.generate(new Supplier<Integer>() {
      int a = 0;
      int b = 1;

      public Integer get() {
        int temp = a;
        a = b;
        b = a + temp;
        return temp;
      }
    }).limit(10).forEach(System.out::println);
  }
}