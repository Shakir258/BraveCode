package LECTURES.J01_ARRAY;

import java.util.Scanner;

public class j07_Pair_in_array {

    public static void pair(int array[]){
        int count=0;
        for(int i = 0; i < array.length-1 ; i++){
            for(int j = i+1; j<array.length;j++){
                System.out.print("("+array[i]+","+array[j]+"), ");
                count++;
            }
            System.out.println();
        }
        System.out.println("Total pair is : "+count);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[5];

        // input array elements
        for(int i=0;i<array.length;i++){
            System.out.print(i+"enter the value");
            array[i]= sc.nextInt();
        }
        pair(array);
        sc.close();
    }
}
