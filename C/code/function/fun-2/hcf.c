#include<stdio.h>
int min(int a, int b){
    if(a < b){
        return b;
    }
    else return a;
}
int gcf(int x,int y){
    int hcf;
    for(int i=1;i<=min(x,y);i++)
    {
        if(x%i == 0 && y%i == 0){
            hcf=i;
        }
    }
    return hcf;
}

void main(){
    int a;
    printf("enter value of = ");
    scanf("%d",&a);
    int b;
    printf("enter value of =");
    scanf("%d",&b);
    int hcf = gcf(a,b);
    printf("enter value of  hcf = %d",hcf);
}