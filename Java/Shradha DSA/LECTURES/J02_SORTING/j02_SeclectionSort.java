//Seclection sort  
package LECTURES.J02_SORTING;

public class j02_SeclectionSort {
        // sorting function 
    public static void seclectionSort(int arr[]){
        int temp;
        for(int i=0;i<arr.length-1;i++){
            int minpos = i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[minpos] > arr[j]){
                    minpos = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minpos];
            arr[minpos]=temp;
        }
    }
    public static void main(String[] args) {
        int arr[] = {5,60,30,8,11,8,9,233,96,78,4,23,42};

        seclectionSort(arr);
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+"  ");
        }
    }
}
