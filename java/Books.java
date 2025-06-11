/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
import java.util.*;
class Books
{
    String title;
    String author;
    float price;
    Books()
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the title");
        this.title=sc.nextLine();
        System.out.println("Enter the author:");
        this.author = sc.nextLine();
        System.out.println("Enter the Price:");
        this.price=sc.nextInt();
    }
    void display()
    {
        System.out.println("Book Title: "+title+" Author: "+author+" Price: "+price);
    }
}
public class Main
{
	public static void main(String[] args) {
	      Books ob1 = new Books();
	      ob1.display();
	      Books ob2 = new Books();
	      ob2.display();
	      Books ob3 = new Books();
	      ob3.display();
	}
}
