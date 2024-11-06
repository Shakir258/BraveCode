#include<stdio.h>
void decr(int n){
    if (n < 1)
    {
        return ;
    }
    printf("%d\n", n);// decresing 
    decr(n-1);
    printf("%d\n", n);  // incresing
    return ;
}
void main(){
    int n;
    printf("enter the value of n = ");
    scanf("%d",&n);
    decr(n);
}