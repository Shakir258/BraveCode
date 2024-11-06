#include<stdio.h>
int main(){
    printf("hello shakir sidiqui and what are you doing now \n");
    

    int a[5],i,max=-1;
    for(i=0;i<5;i++){
        printf("enter the vale of array = ");
        scanf("%d",&a[i]);
    }
    for(i=0;i<5;i++){
        printf("%d",a[i]);
        
    }
    for(i=0;i<5;i++){
        if(i%2!=0){
            a[i]=2*a[i];
        }
        else{
            a[i]=a[i]+10;
        }
    }
    for(i=0;i<5;i++){
        printf("\n%d",a[i]);
        
    }
    // printf("\n%d",max);


    return 0;
}

