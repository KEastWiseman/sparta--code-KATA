function solution(arr) {
    let min = null;
    let idx = null;
    let answer =arr;
    answer.map((ele,index)=>{
        if(!min){
            min=ele;
            idx=index;
        }
        else if(min>ele){
            min=ele;
            idx=index;
        }
    })
    
    if (answer.length<=1){
        answer.splice(idx,1,-1);
        return answer;
    }
    answer.splice(idx,1);
    return answer;
}