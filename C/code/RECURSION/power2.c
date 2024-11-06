#include<stdio.h>
int power(int a,int b){
    if(b==1) return a;
    int x =power(a,b/2);
    if (b%2 !=0){
        return x*x*a;
    }
    else{
    return x*x;
    }
}
int main(){
    int a ;
    printf("enter tha value  of a = ");
    scanf("%d",&a);
    int b ;
    printf("enter tha value of b = ");
    scanf("%d",&b);
    int p =power(a,b);
    printf("tha value of power = %d",p);
    return 0;
}