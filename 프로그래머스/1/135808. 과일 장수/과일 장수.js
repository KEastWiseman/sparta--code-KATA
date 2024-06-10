function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a,b)=>{
        return b-a;
    })
    
    for(let idx = m-1; idx<score.length; idx = idx+m){
        answer += score[idx]*m;
    }
    
    return answer;
}
