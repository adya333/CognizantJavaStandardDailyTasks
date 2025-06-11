/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
import java.util.*;
class Animal{
    
    void makeSound()
    {
        System.out.println("To be overidden");
    }
}
class Dog extends Animal{
    void makeSound()
    {
        System.out.println("Woof!  Woof!\n");
    }
}
class Cat extends Animal{
    void makeSound()
    {
        System.out.println("Meow!  Meow!\n");
    }
}
class Cow extends Animal{
    void makeSound()
    {
        System.out.println("Maawwww!\n");
    }
}
public class Main
{
	public static void main(String[] args) {
		Dog dog = new Dog();
		dog.makeSound();
		Cat cat = new Cat();
		cat.makeSound();
		Cow cow = new Cow();
		cow.makeSound();
	}
}
