package Java.CodeWithHarry.code;

class  Employee{
    String Name = "shakir";
    int role;

    public void printDetails(){
        System.out.println("here print all details");
    }
}

public class C038_OOPs_code {
    public static void main(String[] args) {
        Employee em1 = new Employee();
        Employee em2 = new Employee();
        System.out.println(em1.Name);
        em2.Name =  "aasif";
        System.out.println(em2.Name);
        em2.printDetails();
    }
}