package arraymatrix;

public class Matriz {
    public static void main(String[] args){
        char letra = 'A'; 
        char[][] tabla= new char [6][6];
        for(int i = 0; i < 6; i++){
            for(int j = 0; j < 6; j++){
                tabla[i][j]=letra;
                letra++;
            }
        }
        for(int i = 0; i < 6; i++){
            System.out.print("Fila" + (i+1) + ": ");
            for(int j = 0; j < 6; j++){
                System.out.print(tabla[i][j]);
            }
            System.out.println("");
        }
    }
}
