function solution(strings, n) {
    return strings.sort((a,b)=>{
        let x = a[n] ? a.charCodeAt(n) : 0;
        let y = b[n] ? b.charCodeAt(n) : 0;
        if(x!==y){
            return x-y;    
        }
        a.split('').splice(n,1).join('');
        b.split('').splice(n,1).join('');
        let idx = 0;
        while(idx<=a.length){
            x=a[idx] ? a.charCodeAt(idx):0;
            y=b[idx] ? b.charCodeAt(idx):0;
            if(x!==y){
                return x-y;
            }
            idx++;
        }
        
    });
}

