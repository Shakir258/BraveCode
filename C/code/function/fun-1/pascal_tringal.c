#include<stdio.h>
int fact(int x){
    int f=1;
    for(int i=1; i<x+1 ; i++)
    {
        f=f*i;
    }
    return f;
}
int com(){
    int n,r;
    // printf("value of n ");
    // scanf("%d",&n);
    // printf("value of r ");
    // scanf("%d",&r);
    int nfact = fact(n);
    int rfact = fact(r);
    int n_rfact = fact(n-r);
    int com ;
    com = nfact/(rfact * n_rfact);
    return com;
}
int main(){
    int i,j,k,n,f;
    printf("enter the value of n = ");
    scanf("%d",&n);
    f=com(7,4);
            printf("%d",f);
    for(i=0;i<=n;i++){
        for(j=0;j<=i;j++){
            
        }
        printf("\n");
    }

}