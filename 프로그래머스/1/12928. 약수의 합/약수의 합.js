function solution(n) {
    let x = 1;
    let arr = new Set;
    let result = 0;
    while(true){
        if(x>n){break;}
        if(n%x == 0){
            arr.add(x);
            arr.add(n/x);
        }
        x++;
    }
    arr.forEach(element => {
        result +=element;
    });
    return result;
}
