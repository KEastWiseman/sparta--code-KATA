function solution(a,b) {
    let inputMin = 0;
    let inputMax = 0;
    let answer = 0;
    if ((a-b)>0){
        inputMin=b;
        inputMax=a;
    }
    else{
        inputMax=b;
        inputMin=a;
    }
    while(inputMax-inputMin>=0){
        answer+=inputMin++;
    }
    return answer;
}