package Java.CodeWithHarry.code;

public class C031_method_Overloadin {

    static void joke(){
        System.out.println("What do you call a bear with no teeth? A gummy bear.");
    }
    static void joke(int a){
        System.out.println("joke "+a);
    }

    static void joke(double b){
        System.out.println("float joke "+b);
    }
    public static void main(String[] args) {
        joke();
        joke(20);
        joke(5.6);
    }
}
