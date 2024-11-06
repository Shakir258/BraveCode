#include<stdio.h>
void main(){
    int i,x,c=0;
    printf("enter the number of x = ");
    scanf("%d",&x);

    int a[10];
    for(i=0;i<10;i++){
        printf("enter the vale of array = ");
        scanf("%d",&a[i]);
    }
    for(i=0;i<10;i++){
        if(a[i]>x){
            c++;
        }
        printf("\t%d",a[i]);
        
    }
    printf("\n\ncount = %d\n",c);
}