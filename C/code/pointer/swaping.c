#include<stdio.h>
int swap(int* x, int* y){
    int temp ;
    temp = *x; //temp = a
    *x=*y;  //*x = a
    *y = temp;
    return; 

}
void main(){
    int a,b;
    printf("enter value of a = ");
    scanf("%d",&a);
    printf("enter value of b = ");
    scanf("%d",&b);
    swap(&a,&b);
    printf("enter value of a = %d, b = %d\n",a,b);
}