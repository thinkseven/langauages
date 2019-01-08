import java.util.function.Function;

// a target class
public class Target {
  public boolean targetMethod(String arg) {
    // do something
    System.out.println(arg);
    return true;
  }
}

public class Program {
  public static void main(String[] args) {
    // construct a target with the target method
    // var is in Java 10
    // var target = new Target();
    Target target = new Target();

    // capture the method reference
    // using Functional Interface
    Function<String, Boolean> ivk = target::targetMethod;

    // invokes the referenced method
    boolean result = ivk.apply("using functional interface");
  }
}