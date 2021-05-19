package inoutvar;
import java.util.Scanner;

public class Var {
    
    static double pow(int a, int b){
        return (double)Math.pow((double)a, (double)b);
    }
    // ********JAVA UTILIZA COMA EN LUGAR DE PUNTO PARA LOS DECIMALES******** 
    /*
        Tipo de dato primitivo:
        boolean, char, byte, short, int, long, float y double
    */
    public static void main(String[] args) {
        final double PI = 3.14159; //Constante
        System.out.println("PI es una constante y su valor es: " + PI);
        Scanner input = new Scanner(System.in);
        System.out.print("Ingrese un número: ");
        int a = input.nextInt();
        System.out.print("Ingrese un número: ");
        int b = input.nextInt();
        System.out.println("La operacion de " + a + " elevado a " + b +" es: " + pow(a, b));
        String numero = "";
        numero += input.next();
        numero += input.next();
        numero += input.next();
        System.out.println("Su número es: "+ numero +" y el digito en la posicion 2 iniciando desde 0 es: "+ numero.charAt(1));
        input.close();
    }
}