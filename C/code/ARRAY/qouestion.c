#include<stdio.h>
int main(){
    int arr[10];

for (int i=0; i<10; i++){
    printf("enter the number ");
    scanf("%d",&arr[i]);//95,90,31,25,100,50.65.89.97.30
}
for (int i=0; i<10; i++){
printf("%d  ",arr[i]);
    
}

printf("Main output\n");
for (int i=0; i<10; i++){
    
    if (arr[i] < 35)
    {
        printf(" %d ",i);
    }
    printf("\n1%d",&arr[i]);
} 
}   