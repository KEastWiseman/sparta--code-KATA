function solution(s) {
    // 문자열 길이가 4 || 6이고 숫자로만 구성되어 있는지 확인하는 함수
    let regex = /^[0-9]*$/;
    if (s.length==4 || s.length == 6){
        if (regex.test(s))return true;
    }
    return false;
}