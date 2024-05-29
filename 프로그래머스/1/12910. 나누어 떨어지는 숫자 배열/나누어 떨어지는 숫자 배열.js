function solution(arr, divisor) {
    answer = [];
    arr.forEach((ele)=>{
        (ele%divisor==0)&&answer.push(ele);
    });
    (!answer.length)&&answer.push(-1);
    answer.sort((a,b)=>{
        return a-b;
    });
    return answer;
}