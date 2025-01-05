#include<stdio.h>
int main()
{
    int arr[2][2] ={0,1,2,5};
    int brr[2][2]={5,6,7,9};
    int i,j,sum=0;
    for(i=0;i<2;i++)
    {
        for(j=0;j<2;j++)
        {
            arr[i][j]+=brr[i][j];
        }
    }
    for(i=0; i<2;i++)
    {
        for(j=0; j<2;j++)
        {
            printf("%d\t",arr[i][j]);
            sum+=arr[i][j];
        }
        printf("\n");
    }
    printf(" sum = %d  ",sum);
    return 0;
}
