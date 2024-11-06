#include <stdio.h>
int sum(int x){
    if(x==0) return 0;


    return x + sum(x-1);
}
int main(){
    int n;
    printf("enter the value of n = ");
    scanf("%d",&n);
    int s = sum(n);
    printf("%d",s);
}