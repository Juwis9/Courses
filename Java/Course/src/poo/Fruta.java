package poo;

class Fruta {
    public void colorFruta(){
        System.out.println("Frutas tropicales");
    }    
}

class Manzana extends Fruta{
    public void colorFruta(){
        System.out.println("Manzana = rojo");
    }
}

class Platano extends Fruta{
    public void colorFruta(){
        System.out.println("Platano = amarillo");
    }
}