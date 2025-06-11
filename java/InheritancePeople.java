/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
import java.util.*;
class People{
    String name;
    int age;
    // People(int n, int a)
    // {
    //     this.name = n;
    //     this.age = a;
    // }
    
}
class Employee extends People{
    int salary;
    Employee(String n, int a, int sal)
    {
        this.name = n;
        this.age = a;
        this.salary = sal;
    }
    void display()
    {
        System.out.println("Output here\nName: "+name+"\nAge: "+age+"\nSalary: "+salary);
    }
}
public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
		Scanner sc = new Scanner (System.in);
		System.out.println("Enter the name: ");
		String name=sc.nextLine();
		System.out.println("Enter the age: ");
		int age = sc.nextInt();
		System.out.println("Enter the salary: ");
		int sal = sc.nextInt();
		Employee ob = new Employee(name,age,sal);
		ob.display();
	}
}
