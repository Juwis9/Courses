package funcionescadena;

public class FuncionesString {
    public static void main(String[] args){
        String cadena = "Curso de ", cadena2 = "Java";
        String str1 = "HOla", str2 = "hola";
        System.out.println(cadena.length());
        cadena+=cadena2;
        System.out.println(cadena);
        System.out.println(str1.equals(str2));
        System.out.println(str1.equalsIgnoreCase(str2));
        System.out.println(str1.toLowerCase() + str1.toUpperCase());
        System.out.println(str1.charAt(1));
    }
}
