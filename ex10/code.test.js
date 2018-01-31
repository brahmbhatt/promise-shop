const abc  = require('./code');
// abc();
describe('test the catch', () => {
  test('The function should return a Promise', () => {
    expect(abc()).toBeInstanceOf(Promise);
  });

});
