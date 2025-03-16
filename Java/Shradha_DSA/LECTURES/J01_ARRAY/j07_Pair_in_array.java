package LECTURES.J01_ARRAY;

import java.util.Scanner;

public class j07_Pair_in_array {

    // Function to find pairs in array
    public static void pair(int array[]) {
        int count = 0; // Pair count ko track karne ke liye

        // Outer loop har element ke liye chalega
        for (int i = 0; i < array.length - 1; i++) {
            // Inner loop i ke agle element se start hoga
            for (int j = i + 1; j < array.length; j++) {
                // Har pair ko print kar rahe hain
                System.out.print("(" + array[i] + "," + array[j] + "), ");
                count++; // Har pair ke saath count ko badha rahe hain
            }
            System.out.println(); // Har element ke baad new line
        }
        // Total pairs ko print kar rahe hain
        System.out.println("Total pair is : " + count);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[5]; // 5 elements ka array

        // User se array ke elements input kar rahe hain
        for (int i = 0; i < array.length; i++) {
            System.out.print(i + " enter the value: ");
            array[i] = sc.nextInt();
        }

        // Pair function ko call kar rahe hain
        pair(array);

        sc.close(); // Scanner ko close karte hain to avoid memory leak
    }
}
