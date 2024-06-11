function solution(answers) {
    let answer = [];
    
    const mathLoser1 = [1,2,3,4,5];
    const mathLoser2 = [2,1,2,3,2,4,2,5];
    const mathLoser3 = [3,3,1,1,2,2,4,4,5,5];
    
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    
    
    answers.map((ele,index)=>{
        if(ele==mathLoser1[index%mathLoser1.length])score1++;
        if(ele==mathLoser2[index%mathLoser2.length])score2++;
        if(ele==mathLoser3[index%mathLoser3.length])score3++;
    })
    
    let topScore = [score1,score2,score3].sort((a,b)=>{
        return b-a;
    })
    
    if(topScore[0]==score1)answer.push(1);
    if(topScore[0]==score2)answer.push(2);
    if(topScore[0]==score3)answer.push(3);
    
    return answer;
}
