function solution(num) {
    let index = 0;
    let answer = num;
    while(answer>1){
        if(answer%2==0)answer/=2;
        else answer=answer*3+1;
        if(++index>=500){
            return -1;
        }
    }
    return index;
}