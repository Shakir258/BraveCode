package LECTURES.J01_ARRAY;

public class j03_LinearSearch {

    // Linear Search function jo array ke andar key ko search karega
    public static int linearSearch(int number[], int key) {
        // Loop chal raha hai poore array par
        for (int i = 0; i < number.length; i++) {
            // Agar current element key ke barabar hota hai, toh index return kar do
            if (number[i] == key) {
                return i;
            }
        }

        // Agar key array mein nahi mili, toh -1 return karo
        return -1;
    }

    public static void main(String[] args) {
        // Array ko initialize kiya
        int number[] = {2, 4, 6, 8, 0, 12, 14, 16};
        // Search karne ke liye key
        int key = 10;

        // Linear search function ko call kiya aur result ko index variable mein store kiya
        int index = linearSearch(number, key);

        // Result ko print kiya
        System.out.println(index); // Agar key milti hai toh uska index, warna -1
    }
}
