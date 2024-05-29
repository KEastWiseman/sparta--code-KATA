function solution(n) {
    answer = [];
    n.toString().split('').reverse().forEach(element => {
        answer.push(Number(element));
    });
    console.log(answer);
    return answer;
}
