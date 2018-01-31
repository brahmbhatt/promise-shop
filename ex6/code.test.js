let {promiseOne, promiseTwo,promiseThree} = require('./code');
describe('testcase for promise:', () => {
  // test('using catch:', () => {
  //   expect.assertions(1);
  //   return promiseOne.catch(e => expect(e).toMatch('it is an error'));
  // });

  test('using resolves:', () => {
    expect.assertions(1);
    return expect(promiseTwo).resolves.toBe('it is resolved');
  });

  test('using rejects:', () => {
    expect.assertions(1);
    return expect(promiseThree).rejects.toMatch('it is rejected');
  });
});
