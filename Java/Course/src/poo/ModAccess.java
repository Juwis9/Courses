package poo;

public class ModAccess {
    public int numberPub = 1;
    protected int numberPro = 2;
    int numberDef = 3;
    private int numberPriv = 4;
    public static void main(String[] args) {
        ModAccess obj = new ModAccess();
        System.out.println(obj.numberPub + ", " + obj.numberPro + ", " + obj.numberDef + ", " + obj.numberPriv);
    }
}
