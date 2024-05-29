function solution(n) {
    let idx = n;
    let answer = 0;
    while(idx>0){
        if(idx%2==0)answer+=idx
        idx--
    }
    return answer;
}