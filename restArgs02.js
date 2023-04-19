function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === 'number';
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}


let result = sum(10,'Hi',null,undefined,20); 
console.log(result);   
