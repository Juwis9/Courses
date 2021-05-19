public class IsSqrt{
    boolean sqrt(int x){
        return Math.sqrt(x) % 1 == 0 ? true:false;
    }
    public static void main(String[] args){
        IsSqrt ob1 = new IsSqrt();
        System.out.print(ob1.sqrt(9));
    }
}