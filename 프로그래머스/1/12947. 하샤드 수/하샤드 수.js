function solution(x) {
    let input = x;
    let answer = 0;
    while(input>=1){
        answer += input % 10;
        if(input < 10)break;
        input = Math.trunc(input/10);
    }
    if (x%answer==0)return true;
    else return false;
}