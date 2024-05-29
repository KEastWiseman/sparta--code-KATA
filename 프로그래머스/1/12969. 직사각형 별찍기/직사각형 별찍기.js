process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    setStar(a,b);
});

function setStar(a,b){
    let temp="";
    let answer="";
    for(let idx=1; idx<=a; idx++){
        temp+="*"
    }
    for(let idx=1; idx<=b; idx++){
        answer+=temp;
        answer+="\n";
    }
    console.log(answer);
}