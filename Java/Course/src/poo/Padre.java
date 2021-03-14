package poo;

class Padre {
    String nombre = "Luis";
    public void saludo(){
        System.out.println("Buenos dias familia");
    }
}

class Hijo extends Padre{
    String nombreHijo = "Sergio";
}
