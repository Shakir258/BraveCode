#include<stdio.h>
void incres(int x, int n){
    if(x>n){
        return;
    }
    printf("%d \n", x);
    
    return incres(x+1, n);
}

void main(){
    int n,x;
    printf("enter the vale of x = ");
    scanf("%d",&x);
    printf("enter the vale of n = ");
    scanf("%d",&n);
    incres(x,n);
}