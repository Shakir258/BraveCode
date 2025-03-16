// Package ka naam jo file ko organize karne ke liye use hota hai
package LECTURES.J01_ARRAY;

import java.util.Scanner; // Scanner class ko import kar rahe hain user input ke liye

public class j01_create {
    public static void main(String[] args) {
        // 50 size ka integer array create kiya
        int marks[] = new int[50];
        
        // Scanner object banaya taaki user se input le sakein
        Scanner sc = new Scanner(System.in);

        // User se 3 subjects ke marks input le rahe hain
        marks[0] = sc.nextInt(); // Physics ke marks
        marks[1] = sc.nextInt(); // Chemistry ke marks
        marks[2] = sc.nextInt(); // Maths ke marks

        // Har subject ke marks ko print kar rahe hain
        System.out.println("phy : "+ marks[0]);
        System.out.println("chem : "+ marks[1]);
        System.out.println("math : "+ marks[2]);

        // Scanner ko close karna zaroori hota hai taaki memory leak na ho
        sc.close();
    }
}
