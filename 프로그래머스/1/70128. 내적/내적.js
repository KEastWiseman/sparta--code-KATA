function solution(a, b) {
    let answer = 0;
    a.forEach((ele,idx)=>{
        answer += ele*b[idx];
    })
    return answer;
}