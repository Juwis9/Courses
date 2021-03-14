package poo;

public class Arroz {
    String marca;
    double peso;
    public String getMarca(){
        return marca;
    }
    public void setMarca(String marca){
        this.marca = marca;
    }
    public double getPesoGr(){
        return peso;
    }
    public void setPesoGr(double pesogr){
        peso = pesogr;
    }
    public double getPesoKg(){
        return peso/1000;
    }
}
