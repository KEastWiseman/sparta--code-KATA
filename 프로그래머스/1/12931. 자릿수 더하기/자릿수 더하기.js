function solution(n) {
    let result = 0;
    let x=n;
    while(x>=1){
        result+=x%10;
        x-=x%10;
        x/=10;
    }
    return result;
}