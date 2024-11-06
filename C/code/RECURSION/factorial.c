#include<stdio.h>
int factorial(int n){
    if (n==1) return 1; // base case
    return n*factorial(n-1);
}
void main(){
    int n;
    printf("enter the va;ue of n = ");
    scanf("%d",&n);
    int fact = factorial(n);

    printf("%d\n", fact);

}