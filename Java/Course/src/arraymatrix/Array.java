package arraymatrix;
import java.util.Scanner;
public class Array{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int aux, arreglo[] = new int[7];
        for(int x = 0; x<arreglo.length;x++){
            arreglo[x]=input.nextInt();
        }


        for(int x: arreglo){
            if(x % 2 == 0){
                System.out.println(x + " Par");    
            }
            else{
                System.out.println(x + " Impar");
            }
            
        }


        aux = arreglo[arreglo.length-1];
        for(int y = arreglo.length-1 ; y > 0 ; y--){
            arreglo[y]=arreglo[y-1];
        }
        arreglo[0]=aux;


        for (int i : arreglo) {
            System.out.println(i);
        }

        input.close();
    }
}