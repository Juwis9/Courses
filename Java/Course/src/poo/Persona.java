package poo;

public class Persona {
    int edad;
    String nombre;
    public Persona(int edad, String nombre){
        this.edad = edad;
        this.nombre = nombre;
    }
    public void datos(){
        System.out.println("Nombre: " + nombre + "\nEdad: " + edad);
    }
}
