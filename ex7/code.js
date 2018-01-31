function first()
{
  return new Promise((resolve) => {
    resolve('resolve value of first promise');
  });
}
function second(arg){
  return new Promise((resolve) => {
    resolve(arg + ' and second promise');
  });
}


let firstPromise = first();
let secondPromise = firstPromise.then(function(arg){
  return second(arg);
});

secondPromise.then(console.log);
module.exports = {firstPromise, secondPromise};
