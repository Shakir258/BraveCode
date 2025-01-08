#include<stdio.h>
void main()
{   int i,k,j,s;
    int a[3][3] ,b[3][3],ab[3][3];
    printf("first mmatrax \n");
    for(i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            scanf("%d", &a[i][j]);
        }
        printf("\n");
    }
    printf("second matrix\n");
    for(i = 0; i< 3; i++){
        for(int j = 0; j < 3; j++){
            scanf("%d", &b[i][j]);
        }
        printf("\n");
    }
    printf("multiple\n");
    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 3; j++){
            
        ab[i][j] =0;

        for(k=0; k < 3; k++)
            {
                ab[i][j]= ab[i][j] + a[i][k]*b[k][j];
            }
        }
    }
    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 3; j++){
            
            printf("%d\t", ab[i][j]);
        }
        printf("\n");
    }
    


}
