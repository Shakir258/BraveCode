package LECTURES.J01_ARRAY;

import java.util.Scanner;

public class j08_Sub_array {

    public static void SubArray(int array[]){
        int count=0,min=Integer.MAX_VALUE,max=Integer.MIN_VALUE;
        
        for(int i=0;i<array.length;i++){    //start of sub array
            for(int j=i;j<array.length;j++){        //all mid sub array
                int sum=0;                          //for array sum
                for(int k=i;k<=j;k++){              //print sub array
                    System.out.print(array[k]+" ");
                    sum+=array[k];
                }
                count++;
                System.out.print(","+sum+",      ");        //print array sum
                if(sum>max){
                    max=sum;
                }
                if(sum<min){
                    min=sum;
                }
            }
            System.out.println();
        }
        System.out.println("totle sub array = "+count);         // print total sub array
        System.out.println("minimum is : "+min);                //minimum sub array sum
        System.out.println("maximum is : "+max);                //maximum sub array sum
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[5];                   //define array & initilize

        for(int i=0;i<array.length;i++){                    // input array elements
            System.out.print(i+"enter the value");
            array[i]= sc.nextInt();
        }

        SubArray(array);
        sc.close();
    }
}
