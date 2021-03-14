package control;
import java.util.Scanner;
public class If {
    public static void main(String [] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Escribe tres valores: ");
        int v1 = input.nextInt(), v2 = input.nextInt(), v3 = input.nextInt();

        if(v1 > v2 && v1 > v3){
            System.out.println("El valor mayor es: " + v1);
        }
        else if(v2 > v3){
            System.out.println("El valor mayor es: " + v2);
        }
        else{
            System.out.println("El valor mayor es: " + v3);
        }
        input.close();
    }
}
