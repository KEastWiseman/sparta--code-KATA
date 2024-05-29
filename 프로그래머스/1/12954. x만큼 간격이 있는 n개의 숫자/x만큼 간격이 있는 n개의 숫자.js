function solution(x, n) {
    var answer = [];
    for (let i=1; i<=n; i++){
        answer[i-1]=x*i;
        // console.log(`i:${i}, value:${answer[i-1]}`);
    }
    
    return answer;
}