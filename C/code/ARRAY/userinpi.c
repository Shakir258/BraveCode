#include<stdio.h>
int main(){
    int arr[5];

for (int i=0; i<=4; i++)
    { 
        printf("enter value %d =\n",i);
        scanf("%d ",&arr[i]);
    }


    for (int i=0; i<=4; i++)
    { 
        printf(" %d",arr[i]);
    }

    printf("reverse array");
    for (int i=4; i>=0; i--)
    { 
        printf("\n %d",arr[i]);
    }
    
    return 0;

}