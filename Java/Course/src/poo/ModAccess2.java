package poo;

public class ModAccess2 {
    public static void main(String[] args) {
        ModAccess obj = new ModAccess();
        System.out.println(obj.numberPub + ", " + obj.numberPro + ", " + obj.numberDef);
        // obj.numberPriv No se encuentra pues no es la clase original
    }
}
