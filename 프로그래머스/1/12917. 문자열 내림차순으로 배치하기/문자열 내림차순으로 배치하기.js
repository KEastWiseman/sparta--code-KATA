function solution(s) {
    let numArr=s.split('').map((ele)=>{
        return ele.charCodeAt(0);
    })
    return (numArr.sort((a,b)=>{
            return b-a;
        }).map((ele)=>{
        return String.fromCharCode(ele);
    }).join('')
   );
}