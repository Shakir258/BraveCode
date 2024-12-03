package LECTURES.J01_ARRAY;

public class j03_LinearSearch {

    public static int linearSearch(int number[], int key){
        for(int i=0; i<number.length; i++){
            if(number[i]==key){
                return i;
            }
        }

        return -1; 
    }
    public static void main(String[] args) {
        int number[] = {2,4,6,8,0,12,14,16};
        int key = 10;

        int index = linearSearch(number, key);
        System.out.println(index);
    }
}
