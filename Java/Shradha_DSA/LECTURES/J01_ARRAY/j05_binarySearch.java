package LECTURES.J01_ARRAY;

import java.util.Scanner;


public class j05_binarySearch {


    public static int BinarySearch(int array[], int key){
        int start = 0;
        int end = array.length-1;
        System.out.println("length of array"+ end);


        while (start <= end) {
        int mid = (start + end)/2;
        System.out.println(mid+ "is mid");

            if(array[mid]==key){
                System.out.println("equal");
                return mid;

            } 
            else if(array[mid]<key){
                start = mid+1;
                System.out.println("big" + start);
            }
            else{
                end = mid-1;
                System.out.println("small" + end);
            }
        }
        return -1;
        
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int array [] = new int[5];
        for(int i=0;i<array.length;i++){
            // System.out.print("enter number in array : ");
            array[i] = sc.nextInt();
        }

        int key = 10;


        int result = BinarySearch(array,key);
        System.out.println("answer is : "+ result);



        sc.close();
    }
}
