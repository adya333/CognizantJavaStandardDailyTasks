/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
import java.util.*;
class EmployeeDetails{
    String name;
    int salary;
    int age;
    String desgination;
    EmployeeDetails(String n, int s, int a, String des)
    {
        this.name = n;
        this.salary = s;
        this.age = a;
        this.desgination = des;
    }
    void displayDetails()
    {
        System.out.println("Nmae: "+name+" Salary: "+salary+" Age: "+age+" Designation: "+desgination);
    }
}


public class Main
{
	public static void main(String[] args) {
		//System.out.println("Hello World");
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter name: ");
		String name = sc.next();
			System.out.println("Enter salary: ");
		int sal = sc.nextInt();
			System.out.println("Enter age: ");
			int age = sc.nextInt();
			System.out.println("Enter designation: ");
			String des = sc.next();
			
			EmployeeDetails ob = new EmployeeDetails(name, sal, age, des);
			ob.displayDetails();
	}
}
