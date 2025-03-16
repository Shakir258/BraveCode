package LECTURES.J01_ARRAY;

import java.util.Scanner;

public class j05_binarySearch {

    // Binary search function jo sorted array me key ko dhoondhne ke liye use hoti hai
    public static int BinarySearch(int array[], int key) {
        int start = 0;
        int end = array.length - 1;
        System.out.println("length of array" + end);

        // Jab tak start index end se chhota ya barabar hai, loop chalega
        while (start <= end) {
            // Midpoint calculate karte hain
            int mid = (start + end) / 2;
            System.out.println(mid + " is mid");

            // Agar key mil jaye to uska index return karo
            if (array[mid] == key) {
                System.out.println("equal");
                return mid;
            } 
            // Agar mid value key se chhoti hai, to right half ko search karo
            else if (array[mid] < key) {
                start = mid + 1;
                System.out.println("big" + start);
            }
            // Agar mid value key se badi hai, to left half ko search karo
            else {
                end = mid - 1;
                System.out.println("small" + end);
            }
        }
        // Agar key nahi milti, to -1 return karo
        return -1;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[5];

        // User se array input lena
        for (int i = 0; i < array.length; i++) {
            array[i] = sc.nextInt();
        }

        // Key jise dhoondhna hai
        int key = 10;

        // Binary search function ko call karna aur result store karna
        int result = BinarySearch(array, key);

        // Result ko print karna
        System.out.println("answer is : " + result);

        sc.close();
    }
}
