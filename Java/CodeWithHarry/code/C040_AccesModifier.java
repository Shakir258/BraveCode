package Java.CodeWithHarry.code;

class Employee1{
    private int id;
    private String name;

    public void setId(int n){
        id = n;
    }

    public int getId(){
        return id;
    }

    public void setName(String n){
        name =  n;
    }

    public String getName(){
        return name;
    }
}

public class C040_AccesModifier {
    public static void main (String[] args){

        Employee1 Shakir = new Employee1();
        // Shakir.id = 31;
        // Shakir.name = "shakir";  give error because of attribute are private

        Shakir.setId(31);
        Shakir.setName("Shakir siddiqui");
        System.out.println(Shakir.getId());
        System.out.println(Shakir.getName());
    }
}
