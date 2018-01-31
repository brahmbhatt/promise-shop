let promiseOne = new Promise(function(resolve, reject){
  reject(new error('it is an error'));
});
promiseOne.catch(function(err){
  console.log(err);
});

let promiseTwo  = Promise.resolve('it is resolved');

let promiseThree = Promise.reject('it is rejected');

module.exports = {promiseOne, promiseTwo, promiseThree};
