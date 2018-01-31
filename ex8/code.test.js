const testFile = require('./throwError');

describe('Test for return type.', () => {
  test('The function should return a Promise', () => {
    expect(testFile()).toBeInstanceOf(Promise);
  });
  const input = 'abcd';
  test('Promise resovle value', (done) => {
    // expect.assertions(1);
    const callback = (value) => {
      expect(value).toBeInstanceOf(Error);
      done();
    };
    testFile(input, callback);
  });
});
