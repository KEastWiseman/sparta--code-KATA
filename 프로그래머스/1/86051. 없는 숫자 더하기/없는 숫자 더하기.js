function solution(numbers) {
    var answer = 45;
    numbers.map((ele)=>{
        answer-=ele;
    })
    return answer;
}