package poo;

class Perro{
    int ID;
    String raza;
    int precio;
    public Perro(int ID, String raza, int precio){
        this.ID = ID;
        this.raza = raza;
        this.precio = precio;
    }
    public void correr(){
        System.out.println("El " + this.raza + " está corriendo...");
    }
}