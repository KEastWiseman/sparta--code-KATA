function solution(n) {
    let x = 0;
    while(true){
        if(n%x == 1){
            return x;
        }
        x++;
    }
}