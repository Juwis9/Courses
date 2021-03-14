package control;
import java.util.Scanner;
public class Switch {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Introduzca un número: ");
        int v = input.nextInt();
        switch(v){
            case 1:
                System.out.println("Escribiste 1");
                break;
            case 2:
                System.out.println("Escribiste 2");
                break;
            case 3:
                System.out.println("Escribiste 3");
                break;
            case 4:
                System.out.println("Escribiste 4");
                break;
            case 5:
                System.out.println("Escribiste 5");
                break;
            default:
                System.out.println("Escribise un valor fuera del rango 1-5");
        }
        input.close();
    }
}
