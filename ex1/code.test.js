let output = require('./code');
describe('the code prints log for:', () => {
  test('the given string', (done) => {
    function cb(data){
      expect(data).toBe('TIMED OUT!');
      done();
    }

    output('TIMED OUT!', cb);
  });
});
