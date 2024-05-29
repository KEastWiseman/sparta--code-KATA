function solution(arr) {
    let sum=0;
    arr.map((ele)=>{
        sum+=ele;
    })
    return sum/arr.length;
}