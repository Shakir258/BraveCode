package LECTURES.J01_ARRAY;

public class J02_passByREference {

    public static void update(int marks[], int aasif){
        // marks[0] = marks[0]+1;
        // marks[1] = marks[1]+1;
        // marks[2] = marks[2]+1;
        aasif = 5;
        for(int i=0;i<marks.length;i++){
            marks[i] = marks[i]+1;
        }
    }
public static void main(String[] args) {
    int marks[] = {95,56,88};
    int aasif = 12;
    update(marks,aasif);

    System.out.println(aasif);  //12
    System.out.println(marks[0]); //because of array work on 
    System.out.println(marks[1]); //pass by reference
    System.out.println(marks[2]);
}
}
