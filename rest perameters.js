// rest perameters
function fn(...args){
       let result =0;
      for(const a of args){
  result +=a;         
      }
      return result;
 }

console.log(fn(1,2,3));
