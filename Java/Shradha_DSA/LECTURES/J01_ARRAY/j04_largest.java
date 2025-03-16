package LECTURES.J01_ARRAY;

public class j04_largest {

    // Function jo array ke andar largest aur second largest element ko find karega
    public static int larg(int number[], int large, int sl) {
        // Loop chal raha hai poore array par
        for (int i = 0; i < number.length; i++) {
            // Agar current element large se bada hai, toh second largest ko large bana do
            // Aur large ko current element bana do
            if (number[i] > large) {
                sl = large;
                large = number[i];
            }
            // Agar current element second largest se bada hai aur large se chhota hai
            else if (number[i] > sl && number[i] < large) {
                sl = number[i];
            }
        }
        
        // Second largest element ko print kar raha hai
        System.out.println("Second largest: " + sl);
        
        // Largest element ko return kar raha hai
        return large;
    }

    public static void main(String[] args) {
        // Array ko initialize kiya
        int number[] = {1, 2, 6, 30, 5, 8};
        // Large aur second large ko Integer.MIN_VALUE se initialize kiya
        int large = Integer.MIN_VALUE;
        int sl = Integer.MIN_VALUE;

        // Larg function ko call kiya aur result ko store kiya
        int result = larg(number, large, sl);

        // Largest element ko print kiya
        System.out.println("Largest number: " + result);
    }
}
