function solution(arr1, arr2) {
    return arr1.map((x,xIdx)=>{return x.map((y,yIdx)=>{return y+arr2[xIdx][yIdx]})})
}