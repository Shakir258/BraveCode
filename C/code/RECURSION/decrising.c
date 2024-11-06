#include<stdio.h>
void decr(int n){
    if (n < 0)
    {
        return ;
    }
    printf("%d\n", n);
    decr(n-1);
    return ;
}
void main(){
    int n;
    printf("enter the value of n = ");
    scanf("%d",&n);
    decr(n);
}