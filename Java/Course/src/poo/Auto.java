package poo;

public class Auto {
    int modelo, gasolina;
    String marca;
    public void acelerar(){
        System.out.println("Acelerando...");
    }
    public void velocidad(int vel_max){
        System.out.println("La velocidad max es: " + vel_max + " km");
    }
    
    public String datos(){
        return "Auto modelo: " + this.modelo + "\nMarca: " + this.marca + "\nCreado con: " + this.gasolina +" lts";
    }

    public Auto(int modelo, String marca, int gasolina){
        System.out.println("Creando auto...");
        this.modelo = modelo;
        this.marca = marca;
        this.gasolina = gasolina;
    }
}
