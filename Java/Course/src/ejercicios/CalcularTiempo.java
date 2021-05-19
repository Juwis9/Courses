package ejercicios;
import java.util.Scanner;

public class CalcularTiempo{
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
        int tiempo = sc.nextInt(), semana = tiempo / 168, dias = (tiempo % 168) / 24, horas = tiempo % 24;
        System.out.print(tiempo + " horas equivalen a:\n" + semana + " semanas\n" + dias + " dias\n" + horas + " horas");
        sc.close();
    }
}