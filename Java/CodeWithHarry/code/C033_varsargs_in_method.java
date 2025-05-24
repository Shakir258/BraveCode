package Java.CodeWithHarry.code;

public class C033_varsargs_in_method {

    static void sum(int a , int ...arr ){
        int sum = a;
        for (int b: arr){
            sum += b;
        }
        System.out.println(sum);
    }

    public static void main(String[] args) {
        sum(5,7);
        sum(5,7,8);
        sum(5,7,8,1);
        sum(5,7,8,1,2);
    }
}
