#include<stdio.h>
int main(){
    printf("hello shakir sidiqui and what are you doing now ");
    

    int a[5],i,sum=0;
    for(i=0;i<5;i++){
    printf("enter the vale of array = ");
        scanf("%d",&a[i]);
    }
    for(i=0;i<5;i++){
        sum=sum+a[i];
        printf("%d",a[i]);
        
    }
    printf("sum is = %d",sum);
    return 0;
}
