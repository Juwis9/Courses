package inoutvar;
import java.util.Scanner;

public class InOut{

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // *** WARNING ***
        // When you enter a number and then press Enter, input.next() consumes only the text, not the "end of line" or "\n" character. 
        // if input.nextLine() executes, it consumes the "end of line" still in the buffer from the first input instead of the whole new line.
        System.out.print("Ingrese un caracter: ");
        char caracter = input.nextLine().charAt(0);
        System.out.print("Ingrese una cadena: ");
        String cadena = input.nextLine();
        System.out.println("La cadena que ingresaste es: " + cadena + " y el caracter es: " + caracter);
        input.close();
    }
    
}