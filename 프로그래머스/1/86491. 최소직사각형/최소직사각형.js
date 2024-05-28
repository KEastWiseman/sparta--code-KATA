function solution(sizes) {
    let x=0;
    let y=0;
    sizes.map((ele)=>{
        if(ele[0]>=ele[1]){
            if(x<ele[0])x=ele[0];
            if(y<ele[1])y=ele[1];
        }else{
            if(x<ele[1])x=ele[1];
            if(y<ele[0])y=ele[0];
        }
    })
    return x*y;
}