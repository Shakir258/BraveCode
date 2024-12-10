// BubbleSort 
package LECTURES.J02_SORTING;

import java.util.Scanner;

public class j01_BubbleSort {

    public static void BubbleSort(int num[]){
        int temp;
        int swap=0;
        for(int tern=0;tern<num.length-1;tern++){
            for(int j=0;j<num.length-1-tern;j++){
                if(num[j]>num[j+1]){            //swap condition
                    temp = num[j];
                    num[j] = num[j+1];
                    num[j+1] = temp;
                    swap = swap +1;
                }
            }
            if(swap == 0){                    // save time to 
                System.out.println("array is sorted" + swap);
                break;
            }
            System.out.println("swap "+swap);
        }
    }
    public static void main(String[] args) {
        int number[] = new int[5];
        Scanner sc = new Scanner(System.in);
        for(int i=0 ; i<number.length;i++){
            number[i] = sc.nextInt();
        }
        BubbleSort(number);
        // print sorted array 
        for(int i=0 ; i<number.length;i++){
            System.out.print(number[i]+" ");
        }
        sc.close();
    }
}
