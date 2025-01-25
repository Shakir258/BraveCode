package LECTURES.J01_ARRAY;

import java.util.Scanner;

public class j06_Reverse {
    public static void revers(int array[]){
        int start = 0;
        int end = array.length-1;
        int temp;

        // revers the array element using swap method
        while (start<end) {
            temp = array[start];
            array[start++]=array[end];
            array[end--]=temp;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[8];

        // input array elements
        for(int i=0;i<array.length;i++){
            System.out.print(i+"enter the value");
            array[i]= sc.nextInt();
        }

        revers(array);

        //Print array element
        for(int i=0;i<array.length;i++){
            System.out.println(i+"new arr ele = "+array[i]);
        }
        sc.close();
    }
}
