package LECTURES.J02_SORTING;
import java.util.Arrays;
import java.util.Collections;

public class j03_InsertionSort {

    public static void InsertionSort(int arr[]){
        for(int i=1; i<arr.length; i++){
            int initial = arr[i];
            int prev = i-1;
            while(prev >= 0 && arr[prev] > initial){
                arr[prev+1] =  arr[prev];
                prev--;
            }

            // insert
            arr[prev+1] =  initial;


        }
    }
    public static void main(String[] args){
        int arr[] =  {5,60,30,8,11,8,9,233,96,78,4,23,42};
        InsertionSort(arr);
        //direct method
        // Arrays.sort(arr, ); 
        // Arrays.sort(arr, Collections.reverseOrder()); isko you karne ke kiye int ko Integer karna pagega
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+"  ");
        }
    }
}
