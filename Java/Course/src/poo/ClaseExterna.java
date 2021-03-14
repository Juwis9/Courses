package poo;

public  class ClaseExterna{
    int x = 30;
    public class ClaseInterna{
        int y = 20;
    }
    static class ClaseInterna2{
        int z = 10;
    }
    public class ClaseInterna3{
        public int objIntMet(){
            return x;
        }
    }
}