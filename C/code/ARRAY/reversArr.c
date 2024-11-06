#include<stdio.h>
void main(){
    int arr[7] = {1,2,3,6,5,9,8};
    int i,j,k,tem;

    for(i=0,j=6;i<=j;i++,j--){
        tem=arr[i];
        arr[i]=arr[j];
        arr[j]=tem;

    }
    for(i=0;i<7;i++){
        printf("\t%d ",arr[i]);
    }

}