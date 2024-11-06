#include<stdio.h>
void main(){
    int a[10],i,j,count=0,x=12,sum;
    for(i=0;i<10;i++){
        printf("enter the vale of array = ");
        scanf("%d",&a[i]);
    }
    for(i=0;i<10;i++){
        printf("%d",a[i]);
        
    }
    for(i=0;i<9;i++){
        for(j=i+1;j<10;j++){
            sum=a[i]+a[j];
            if(sum==x){
                count++;
            }
        }
    }
    printf("\n\n\ncount = %d",count);
}