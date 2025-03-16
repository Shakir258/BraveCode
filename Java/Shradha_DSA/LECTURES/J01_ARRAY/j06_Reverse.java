package LECTURES.J01_ARRAY;

import java.util.Scanner;

public class j06_Reverse {

    // Function to reverse the array
    public static void revers(int array[]) {
        int start = 0; // Starting index
        int end = array.length - 1; // Last index
        int temp; // Temporary variable for swapping

        // Jab tak start index end index se chota hai, tab tak loop chalega
        while (start < end) {
            // Swap karte hain start aur end elements ko
            temp = array[start];
            array[start++] = array[end]; // Start ko aage badhate hain
            array[end--] = temp; // End ko peeche le jate hain
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[8]; // Array of size 8

        // Array ke elements input karte hain
        for (int i = 0; i < array.length; i++) {
            System.out.print(i + " enter the value: ");
            array[i] = sc.nextInt(); // User se input lete hain
        }

        // Array ko reverse karte hain
        revers(array);

        // Reversed array ko print karte hain
        System.out.println("Reversed Array:");
        for (int i = 0; i < array.length; i++) {
            System.out.println(i + " new arr ele = " + array[i]);
        }

        sc.close(); // Scanner ko close karte hain to avoid memory leak
    }
}
