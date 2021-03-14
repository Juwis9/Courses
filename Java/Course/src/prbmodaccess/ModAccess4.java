package prbmodaccess;

public class ModAccess4 {
    public static void main(String[] args) {
        ModAccess3 obj = new ModAccess3();
        System.out.println(obj.numberPub);
        // obj.numberPriv No es visible pues el valor no es llamado por la clase original.
        // obj.numberDef No es visible pues esta clase no pertenece al mismo paquete.
        // obj.numberPro No es visible pues esta clase no hereda de la clase original.
    }
}


