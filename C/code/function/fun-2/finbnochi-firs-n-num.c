#include<stdio.h>
void fibo(int x){
    int t1 =0;
    int t2= 1;
    int t ;
    for(int i = 0; i <x;i++){
        printf("%d \t",t1);
        t=t1+t2;
        t1=t2;
        t2=t;

    }
}
void main(){
    int n,x;
    printf("enter the value of n =");
    scanf("%d",&n);
    for(int i=1 ; i<=n ; i++){
        fibo(i);
    printf("\n");
    //printf("%d = %d\t",i,x);
    }
}