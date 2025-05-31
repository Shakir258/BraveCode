package Java.CodeWithHarry.code;

class base{
    int x;

    public int getX() {
        return x;
    }
    public void setX(int x) {
        this.x = x;
    }
    public void printMe(){
        System.out.println(x);
    }
}

class Driverd extends base{
    int y;
    public int getY() {
        return y;
    }
    public void setY(int y) {
        this.y = y;
    }
}


public class C045_Inheritance {
    public static void main(String[] args) {
        Driverd obj = new Driverd();
        obj.setX(7);
        obj.printMe();
        System.out.println("shakir");
        
    }
}
