
//Write a Java program to create a class called "Cat" with instance variables name and age.
// Implement a default constructor that initializes the name to "Unknown" and the age to 0.
// Print the values of the variables.


package Java.Code;

class Cat{
    String name ;
    int age ;
    Cat(){
        name = "Unknown";
        age = 0;
//        System.out.println(name);
//        System.out.println(age);

    }
}

public class j002_constructor_1 {
    public static void main(String[] args) {
        Cat obj = new Cat();
        System.out.println(obj.name);
        System.out.println(obj.age);
    }
}
