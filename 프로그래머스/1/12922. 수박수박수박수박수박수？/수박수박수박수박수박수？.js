function solution(n) {
    let idx = 1;
    let answer = "";
    while(idx<=n){
        idx%2==0 ? answer+="박" : answer+= "수"
        idx++;
    }
    return answer;
}