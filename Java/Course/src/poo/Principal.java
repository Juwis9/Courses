package poo;

public class Principal {
    public static void main(String[] args){
        Perro Balto = new Perro(1234, "Husky", 1000);
        Balto.correr();
        System.out.println("");
        
        Auto nissan = new Auto(2012, "Nissan", 150);
        System.out.println(nissan.datos()+"\n");
        nissan.acelerar();
        nissan.velocidad(150);

        Alumno Juan = new Alumno("Juan", 15);
        Alumno Pedro = new Alumno("Pedro", 16);
        System.out.print("El alumno de mayor edad es:\n");
        Alumno.mayor(Juan, Pedro).datos(); 
        
        Fecha f = new Fecha();
        f.setDia(13);
        f.setMes("Noviembre");
        f.setAño(1997);
        System.out.println(f.getDia() + "/" + f.getMes() + "/" + f.getAño());

        Hijo hijo = new Hijo();
        Padre padre = new Padre();
        hijo.saludo();
        System.out.println(hijo.nombre);
        System.out.println(padre.nombre);

        Persona p1 = new Persona(15, "Juan");
        Persona p2 = new Persona(16, "Mario");
        p1.datos();
        p2.datos();

        Leon leon = new Leon();

        Arroz arrocito = new Arroz();
        arrocito.setMarca("La Fina");
        arrocito.setPesoGr(100.75);
        System.out.println("El arroz marca " + arrocito.getMarca() + " en grs pesa: " + arrocito.getPesoGr());
        System.out.println("El arroz marca " + arrocito.getMarca() + " en Kgs pesa: " + arrocito.getPesoKg());
        ClaseExterna objExt = new ClaseExterna();
        ClaseExterna.ClaseInterna objInt = objExt.new ClaseInterna();
        // Al ser una clase estática no necesitamos instanciar un objeto ClaseExterna, a diferencia del ejemplo anterior
        ClaseExterna.ClaseInterna2 objInt2 = new ClaseExterna.ClaseInterna2();
        ClaseExterna.ClaseInterna3 objInt3 = objExt.new ClaseInterna3();
        System.out.println(objExt.x + objInt.y + objInt2.z + objInt3.objIntMet()); 

        Ciudad paris = new Ciudad();
        paris.informacion();

        Fruta nuevaFruta = new Fruta();
        Manzana nuevaManzana = new Manzana();
        Platano nuevoPlatano = new Platano();
        nuevaFruta.colorFruta();
        nuevaManzana.colorFruta();
        nuevoPlatano.colorFruta();

        Club barcelonaFC = new Club();
        barcelonaFC.ciudad();
        barcelonaFC.paisOrigen();
    }
}
