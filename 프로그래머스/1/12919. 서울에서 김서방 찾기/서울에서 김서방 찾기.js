function solution(seoul) {
    let answer;
    seoul.forEach((element,index) => {
        (element==="Kim") && (answer=index);
    });
    return `김서방은 ${answer}에 있다`
}