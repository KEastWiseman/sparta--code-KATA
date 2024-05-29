function solution(n) {
    let temp = Array.from(String(n), Number).sort();
    let digit = 1;
    let result = 0;
    temp.forEach(function(element){
        result += digit * element;
        digit *= 10;
    })
    return result;
}