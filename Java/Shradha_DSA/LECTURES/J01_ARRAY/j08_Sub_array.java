package LECTURES.J01_ARRAY;

import java.util.Scanner;

public class j08_Sub_array {

    public static void SubArray(int array[]) {
        int count = 0; // Total subarrays ka count
        int min = Integer.MAX_VALUE; // Minimum sum track karne ke liye
        int max = Integer.MIN_VALUE; // Maximum sum track karne ke liye

        // Subarray ka start point
        for (int i = 0; i < array.length; i++) {
            // Subarray ka end point
            for (int j = i; j < array.length; j++) {
                int sum = 0; // Har subarray ka sum calculate karne ke liye

                // Subarray ke elements ko print aur sum kar rahe hain
                for (int k = i; k <= j; k++) {
                    System.out.print(array[k] + " ");
                    sum += array[k];
                }

                count++; // Subarray ka count badha rahe hain
                System.out.print("," + sum + ",   "); // Subarray ka sum print kar rahe hain

                // Maximum aur minimum sum ko update kar rahe hain
                if (sum > max) {
                    max = sum;
                }
                if (sum < min) {
                    min = sum;
                }
            }
            System.out.println(); // Har i ke baad new line
        }

        // Final output
        System.out.println("Total subarrays = " + count); // Total subarrays
        System.out.println("Minimum sum = " + min); // Minimum subarray sum
        System.out.println("Maximum sum = " + max); // Maximum subarray sum
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[5]; // 5 elements ka array

        // User se input lena
        for (int i = 0; i < array.length; i++) {
            System.out.print(i + " enter the value: ");
            array[i] = sc.nextInt();
        }

        // SubArray function ko call kar rahe hain
        SubArray(array);

        sc.close(); // Scanner ko close kar rahe hain to avoid memory leak
    }
}
