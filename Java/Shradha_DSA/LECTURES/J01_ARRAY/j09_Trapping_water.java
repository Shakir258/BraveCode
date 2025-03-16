// Rain Water Trapping System at the Building
package LECTURES.J01_ARRAY;

public class j09_Trapping_water {

    public static int trap(int[] BH) {
        int leftmax[] = new int[BH.length]; // Left max array
        int rightmax[] = new int[BH.length]; // Right max array
        int lm = Integer.MIN_VALUE; // Left max ko track karne ke liye
        int rm = Integer.MIN_VALUE; // Right max ko track karne ke liye

        // Step 1: Leftmax aur Rightmax arrays ko fill karna
        for (int i = 0; i < BH.length; i++) {
            // Left max calculate karna
            if (BH[i] > lm) {
                lm = BH[i];
            }
            leftmax[i] = lm;

            // Right max calculate karna
            int j = (BH.length - 1) - i;
            if (BH[j] > rm) {
                rm = BH[j];
            }
            rightmax[j] = rm;
        }

        // Step 2: Total trapped water calculate karna
        int totalwater = 0;
        for (int i = 0; i < BH.length; i++) {
            int waterLevel = Math.min(leftmax[i], rightmax[i]); // Minimum height of the barrier
            totalwater += (waterLevel - BH[i]); // Water trapped at current index
        }

        return totalwater;
    }

    public static void main(String[] args) {
        int BH[] = {4, 2, 0, 6, 3, 5, 0, 6};

        int totalwater = trap(BH);
        // Show the calculation
        System.out.println("Total water trapped is: " + totalwater);
    }
}
