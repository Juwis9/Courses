public class SumsOfParts {

    public static int[] Sum(int[] ls){
        int[] res = new int[ls.length+1];
        for (int i = ls.length-1; i >= 0; i--){
            res[i] = res[i+1] + ls[i];
        }
        return res;
    }
    public static void main(String[] args){
        int[] ls = {1,2,3,4,5,6}, res = Sum(ls);
        for (int v:res){
            System.out.print(v+", ");
        }
    }
}
