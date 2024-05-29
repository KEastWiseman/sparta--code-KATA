function solution(s, n) {
    let answer=s.split('').map((ele)=>{
        let charCode = ele.charCodeAt(0);
        let charCodePlusN = charCode + n;
        if(charCode==32)return ele;
        else if(charCode<=90){
            if(charCodePlusN > 90)charCodePlusN-=26;            
        }
        else{
            if(charCodePlusN >122)charCodePlusN-=26;
        }
        return String.fromCharCode(charCodePlusN);
    })
    return answer.join('');
}