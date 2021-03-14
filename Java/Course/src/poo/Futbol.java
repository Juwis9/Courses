package poo;

abstract class Futbol {
    public abstract void ciudad();
    public void paisOrigen(){
        System.out.println("Pais: España");
    }
}

class Club extends Futbol{
    public void ciudad(){
        System.out.println("Ciudad: Barcelona");
    }
}