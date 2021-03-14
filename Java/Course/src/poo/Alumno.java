package poo;

public class Alumno {
    private String nombre;
    private int edad;
    public Alumno(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    public void datos(){
        System.out.printf("Nombre: %s\nEdad: %d\n", this.nombre, this.edad);
    }
    public static Alumno mayor(Alumno al1, Alumno al2){
        return al1.edad>=al2.edad?al1:al2;
    }
}
