function solution(angle) {
    var answer = 1;
    (angle == 90) && (answer = 2);
    (angle > 90) && (answer = 3);
    (angle == 180) && (answer = 4);
    return answer;
}