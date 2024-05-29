function solution(left, right) {
    let answer=0;
    let temp=null;
    for (let idx = left; idx<=right; idx++){
        temp=findDivisorCount(idx);
        if(temp%2==0)answer+=idx
        else answer-=idx
    }
    return answer;
}

function findDivisorCount(x){
    let idx = 0;
    let count = 0;
    while(idx<=x){
        if(x%idx==0)count++;
        idx++;
    }
    return count;
}