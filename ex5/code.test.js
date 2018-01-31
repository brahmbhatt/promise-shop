promise = require('./code');
// let promise = new Promise(function(resolve, reject){
//   resolve('PROMISE VALUE');
// });
describe('testcase for promise to be async checked by:',() => {
  test('testcase', () => {
    expect.assertions(1);
    return expect(promise).resolves.toBe('PROMISE VALUE');
  });
});
