/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
import java.util.*;
class ShapesArea
{
    void calculateArea(float radius)
    {
        double area= 3.414*(radius*radius);
        System.out.println("The area of the circle is: "+area);
    }
    void calculateArea(int side)
    {
        double area = (double)side*side;
        System.out.println("The area of the sqaure is: "+area);
    }
    void calculateArea(int length, int breadth)
    {
        double area = (double)length*breadth;
        System.out.println("The area of the recatangle is: "+area);
    }
    void calculateArea(int base, float height)
    {
        double area = (base*height)/2;
        System.out.println("The area of the triangle is: "+area);
    }
}
public class Main
{
	public static void main(String[] args) {
	ShapesArea ob = new ShapesArea();
	ob.calculateArea(1.0f);
	ob.calculateArea(2);
	ob.calculateArea(3,4);
	ob.calculateArea(2,3.1f);
	}
}
