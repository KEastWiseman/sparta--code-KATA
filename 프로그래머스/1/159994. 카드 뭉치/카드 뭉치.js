function solution(cards1, cards2, goal) {
    let answer=goal.map((ele)=>{
        if(ele==cards1[0]){
            return cards1.shift();
        }else if(ele==cards2[0]){
            return cards2.shift();
        }
    })
    return answer.join('')==goal.join('') ? "Yes":"No";
}