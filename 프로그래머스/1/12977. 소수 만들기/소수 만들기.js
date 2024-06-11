function solution(nums) {
    let answer = 0;
    for(let x=0; x<=nums.length-3; x++){
        for(let y=1; y<=nums.length-2; y++){
            for(let z=2; z<=nums.length-1; z++){
                if(z>y&&y>x){
                    if(checkPrime(nums[x]+nums[y]+nums[z])){
                        answer++;
                    }
                }
            }
        }
    }
    return answer;
}


function checkPrime(a){
    let idx = 2;
    while(idx<a){
        if((a%idx)==0) return false;
        idx++;
    }
    return true;
}

