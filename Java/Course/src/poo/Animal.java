package poo;

public class Animal {
    public Animal(){
        System.out.println("Soy un animal");
    }
    public Animal(String tipo){
        System.out.println("Tipo: " + tipo);
    }
}

class Leon extends Animal{
    public Leon(){
        super("Felino");
        System.out.println("Soy un león");
    }
}
