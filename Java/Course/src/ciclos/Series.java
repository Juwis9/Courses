package ciclos;
import java.util.Scanner;

public class Series {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Ingrese cuantos niveles desea: ");
        int lim = input.nextInt(), nivel = 1, cont = 1;


        System.out.println("While:");
        while(nivel <= lim){
            while(cont < nivel * 2){
                System.out.print(cont);
                cont+=2;
            }
            System.out.println("");
            cont = 1;
            nivel += 1;
        }


        nivel=1;
        System.out.println("\nDo While:");
        do{
            do{
                System.out.print(cont);
                cont += 2;
            }while(cont < nivel * 2);
            System.out.println("");
            cont = 1;
            nivel += 1;
        }while(nivel <= lim);


        System.out.println("\nFor:");
        for(nivel = 1; nivel <= lim; nivel += 1){
            for(cont = 1; cont < nivel * 2 ;cont += 2){
                System.out.print(cont);
            }
            System.out.println("");
        }
        input.close(); 
    }
}