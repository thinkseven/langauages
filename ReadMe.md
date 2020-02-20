# Commands
## .NET Core/C#
### create and run project
```bash
dotnet new sln -o dotnet-examples
cd dotnet-examples
dotnet new classlib -o examples
mv ./examples/Class1.cs ./examples/fibonacci.cs
dotnet sln add ./examples/examples.csproj
dotnet new xunit -o examples.tests
dotnet add ./examples.tests/examples.tests.csproj reference ./examples/examples.csproj
dotnet sln add ./examples.tests/examples.tests.csproj
dotnet test
```
## Java
### run java examples
```bash
source ./Scripts/run-java.sh
cd java-examples
./mvnw clean install
./mvnw -Dtest=TestApp1 test
./mvnw -Dtest=TestApp1,TestApp2 test
./mvnw -Dtest=TestApp1#methodname test
./mvnw -Dtest=TestApp1#testHello* test
./mvnw -Dtest=TestApp1#testHello*+testMagic* test
```
## Javascript
## Python
# List of examples
- Fibonacci Sequence
# List of concepts
- Delegates
# References

- https://en.wikipedia.org/wiki/Comparison_of_C_Sharp_and_Java
