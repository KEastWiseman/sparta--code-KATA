function solution(s) {
    let number = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine'];
    let numberCheck = /^[0-9]$/;
    let temp = "";
    let answer=[];
    s.split('').map((ele)=>{
        if(numberCheck.test(ele)){
            answer.push(ele);
        }else{
            temp+=ele
            number.map((ele2,idx)=>{
                if(ele2==temp){
                    answer.push(idx);
                    temp ="";
                }
            })
        }
    })
    return +answer.join('');
}