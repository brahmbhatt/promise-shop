let {firstPromise, secondPromise} = require('./code');
describe('testcases to check the resolve value:', () => {
  test('chech for the firstPromise', () => {
    expect.assertions(1);
    return expect(firstPromise).resolves.toBe('resolve value of first promise');
  });

  test('chech for the secondPromise', () => {
    expect.assertions(1);
    return expect(secondPromise).resolves.toBe('resolve value of first promise and second promise');
  });
});
