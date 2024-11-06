#include<stdio.h>
int stair(int n){
    if(n==1) return 1;
    if(n==2){
        return 2;
    }
    return stair(n-1)  + stair(n-2);
}
int main(){
    int n ;
    printf("enter the value of stair n = ");
    scanf("%d",&n);
    int f = stair(n);
    printf("%d",f);
    return 0;
d 