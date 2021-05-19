package ejercicios;
import java.util.Scanner;
public class Cuadratica {
    public static void main (String []args){
        Scanner sc = new Scanner(System.in);
        int cuad = sc.nextInt(), lin = sc.nextInt(), ind = sc.nextInt();
        double r1 = (-lin+Math.sqrt(Math.pow(lin, 2) - 4*cuad*ind))/(2*cuad);
        double r2 = (-lin-Math.sqrt(Math.pow(lin, 2) - 4*cuad*ind))/(2*cuad);
        System.out.print("La raiz 1 es: " + r1 + "\nLa raiz 2 es: " + r2);
        sc.close();
    }
}
