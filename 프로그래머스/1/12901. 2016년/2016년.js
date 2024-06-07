function solution(a, b) {
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    const days = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    let sum =0;
    for(let i =0; i<=a-2; i++){
        sum+=month[i];
    }
    sum+=b;
    return days[sum%7];
}