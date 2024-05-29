function solution(phone_number) {
    var answer = '';
    var starLength = phone_number.length - 4;
    for(var i=0;i<starLength;i++){
        answer+="*";
    }
    answer+=phone_number.slice(-4);
    return answer;
}