// rain water trapping system calculate at the bulding
package LECTURES.J01_ARRAY;

public class j09_Trapping_water {

    public static int trap(int[] BH) {
        int leftmax[] = new int[BH.length];
        int rightmax[] = new int[BH.length];
        int lm =Integer.MIN_VALUE;
        int rm =Integer.MIN_VALUE;
        

        for(int i=0;i<leftmax.length;i++){
//  leftmax element
            if(BH[i]>lm){
                leftmax[i]=lm=BH[i];
            }
            else{
                leftmax[i]=lm;
            }
// rigthmax element
            if(BH[(BH.length-1)-i]>rm){
                rightmax[(BH.length-1)-i]=rm=BH[(BH.length-1)-i];
            }
            else{
                rightmax[(BH.length-1)-i]=rm;
            }
        }
        int totalwater = 0;
        for(int i=0;i<BH.length;i++){
            totalwater += (Integer.min(leftmax[i], rightmax[i]) - BH[i]); 
        }

    return totalwater;

    }


    public static void main(String[] args) {
        int BH[] = {4,2,0,6,3,5,0,6};

        int totalwater = trap(BH);
        System.out.println("totle water is : "+ totalwater);
    }
    
}
