#include<stdio.h>
int fibo(int i){
    if (i==1){
        return 0;
    }
    if(i==2){
        return 1;
    }
    return fibo(i-1)+fibo(i-2);
}
void main (){
    int n,f;
    printf("enter the vale of  n = ");
    scanf("%d", &n);
    for(int i =1 ; i<=n;i++)
    {
        f = fibo(i);
        printf("%d ", f);
    }
}