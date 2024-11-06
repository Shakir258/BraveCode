#include<stdio.h>
int fact(int x){
    int result=1;
    for(int i = 1; i <= x; i++){
        result = result*i;
    }
    return result;
    
}
void main(){
    int n,x;
    printf("enter the value of n =");
    scanf("%d",&n);
    for(int i=1 ; i<=n ; i++){
    x = fact(i);
    printf("%d = %d\t",i,x);
    }
}