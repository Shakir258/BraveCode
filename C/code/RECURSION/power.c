#include<stdio.h>
int power(int a, int b){
    if (b==0) return 1; //

    return a*power(a,b-1);
    
}
int main(){
    int a,b;
    printf("enter the value of a = ");
    scanf("%d",&a);
    printf("enter the vale of power =  ");
    scanf("%d",&b);
    int p=power(a,b);
    printf("power of= %d\n",p);
}