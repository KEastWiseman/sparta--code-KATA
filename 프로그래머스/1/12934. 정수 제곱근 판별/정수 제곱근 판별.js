function solution(n) {
    let answer = 0;
    while(true){
        answer+=1;
        if (answer*answer==n){
            answer+=1;
            break;
        }
        else if(answer*answer>n){
            return -1
        }
    }
    return answer*answer;
}