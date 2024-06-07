function solution(k, score) {
    let honorList = [];
    let answer = score.map((ele)=>{
        if(honorList.length<k){
            honorList.push(ele);
        }
        else if(honorList[honorList.length-1]<ele){
            honorList.pop();
            honorList.push(ele);
        }
        honorList.sort((a,b)=>{
            return b-a;
        })
        
        
        return honorList[honorList.length-1]
    })
    
    return answer;
}