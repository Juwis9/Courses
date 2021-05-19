package ejercicios;
import java.util.Scanner;
public class Multiplo {
    public static void main (String [] args){
        Scanner sc = new Scanner (System.in);
        System.out.print(sc.nextInt()%10 == 0 ? "Si":"No");
        sc.close();
    }
}
