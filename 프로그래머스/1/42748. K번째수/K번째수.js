function solution(array, commands) {
    let temp;
    let answer = commands.map((ele)=>{
        if (ele[0] == ele[1]){
            temp = array.slice(ele[0]-1,ele[1]);
        }else{
            temp = array.slice(ele[0]-1,ele[1]);
        }
        return temp.sort((a,b)=>{
            return a-b;
        })[ele[2]-1]
        
    })
    return answer;
}