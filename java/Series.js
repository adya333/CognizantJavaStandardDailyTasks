/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
// name meaninful classname.
import java.util.*;

  class Series{
    int limit;
    Series(int l)
    {
        this.limit = l;
    }
    void display()
    {
        for(int i=0;i<=limit;i++)
        {
            if((i%10)==0) continue;
            else if((i%2)==0) System.out.println(i);
        }
    }
}
public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
// 		int x = 2; int y = 3;
// 		System.out.println("Sum: "+(x+y));
        Scanner sc = new Scanner(System.in);
//   System.out.println("Enter first num:");
//   int x = sc.nextInt();
//   System.out.println("Enter second num:");
//   int y = sc.nextInt();
//   System.out.println("Sum: "+(x+y));

     System.out.println("Enter the limit: ");
     int limit = sc.nextInt();
     Series ob = new Series(limit);
     ob.display();
 	}
}
