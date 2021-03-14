package prbmodaccess;
import poo.ModAccess;

public class ModAccess3 extends ModAccess {
    public static void main(String[] args) {
        ModAccess3 obj = new ModAccess3();
        System.out.println(obj.numberPub + ", " + obj.numberPro);
        // obj.numberPriv No es visible pues el valor no es llamado por la clase original
        // obj.numberDef No es visible pues esta clase no pertenece al mismo
    }
}
