function solution(n, m, section) {
  const arr = Array.from(Array(n), (_, index) => index + 1);
  
  let paint = 0;

  arr.forEach( (e, idx)=> {
    if(section.includes(e)){
      for(let i = 0 ; i < m ; i++){
        arr[idx+i] = 0; 
      }
      paint++
    }
  });

  return paint;
}