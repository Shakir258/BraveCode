package LECTURES.J01_ARRAY;

public class j04_largest {

    public static int larg(int number[], int large, int sl){
        for(int i=0;i<number.length;i++){
            if(number[i]>large){
                sl =large;
                large = number[i];
            }
            else if(number[i]>sl && number[i]<large){
                sl = number[i];
            }
        }
        System.out.println("Second large "+sl);
        return large;
    }
    
    public static void main(String[] args) {
        int number[] = {1,2,6,30,5};
        int large = Integer.MIN_VALUE;
        int sl = Integer.MIN_VALUE;

        int result = larg(number, large, sl);

    }
}
