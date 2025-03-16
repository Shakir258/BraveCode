// Package ka naam jo file ko organize karne ke liye use hota hai
package LECTURES.J01_ARRAY;

public class J02_passByREference {

    // Function jo array aur ek integer ko update karega
    public static void update(int marks[], int aasif) {
        // Array ke har element ko 1 se increment kar rahe hain
        // Ye array pass by reference hota hai, isliye original array update hoga
        for (int i = 0; i < marks.length; i++) {
            marks[i] = marks[i] + 1;
        }

        // `aasif` ko change karne ki koshish, lekin ye pass by value hai
        aasif = 5;  
    }

    public static void main(String[] args) {
        // Ek array aur ek normal variable ko initialize kar rahe hain
        int marks[] = {95, 56, 88};
        int aasif = 12;

        // Function ko call kiya
        update(marks, aasif);

        // `aasif` ka value same rahega kyunki wo pass by value hota hai
        System.out.println(aasif);  // Output: 12

        // Array ka value change ho gaya kyunki array pass by reference hota hai
        System.out.println(marks[0]); // Output: 96
        System.out.println(marks[1]); // Output: 57
        System.out.println(marks[2]); // Output: 89
    }
}
