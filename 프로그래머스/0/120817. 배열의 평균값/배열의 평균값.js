function solution(numbers) {
    let answer=0;
    numbers.map((ele)=>{
        answer +=ele;
    })
    return answer/numbers.length;
}