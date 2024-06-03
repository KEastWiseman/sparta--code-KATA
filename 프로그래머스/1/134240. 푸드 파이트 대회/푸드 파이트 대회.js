function solution(food) {
    let answer = "0";
    food.reverse().map((ele,index)=>{
        if(ele>1){
            let foodcount = Math.floor(ele/2);
            for(let x = 0; x<foodcount; x++){
                answer = (food.length-index-1) + answer;
                answer = answer + (food.length-index-1);
            }
        }
    })
    return answer;
}