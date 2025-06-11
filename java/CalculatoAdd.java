/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
import java.util.*;
class Calculator
{
    void add(int x, int y)
    {
        System.out.println((x+y));
    }
    void add(double x, double y)
    {
        System.out.println((x+y));
    }
    void add(int x, int y,int z)
    {
        System.out.println((x+y+z));
    }
}
public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n=sc.nextInt();
		Calculator calc = new Calculator();
		System.out.println("Choose an operation:");
            System.out.println("1. Add two integers");
            System.out.println("2. Add two doubles");
            System.out.println("3. Add three integers");
		
for(int i=1;i<=n;i++)
		{
		     System.out.println("Enter choice");
		     int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter two integers: ");
                    int a = sc.nextInt();
                    int b = sc.nextInt();
                    calc.add(a, b);
                    break;

                case 2:
                    System.out.print("Enter two doubles: ");
                    double x = sc.nextDouble();
                    double y = sc.nextDouble();
                    calc.add(x, y);
                    break;

                case 3:
                    System.out.print("Enter three integers: ");
                    int p = sc.nextInt();
                    int q = sc.nextInt();
                    int r = sc.nextInt();
                    calc.add(p, q, r);
                    break;

                default:
                    System.out.println("Invalid choice.");
		}}
	}
}
