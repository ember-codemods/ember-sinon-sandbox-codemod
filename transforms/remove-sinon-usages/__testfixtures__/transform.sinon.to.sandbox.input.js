import { module, test } from 'qunit';

module('Unit | blah', function(hooks) {
  test('blah', function(assert) {
    assert.expect(1);

    let stub = sinon.stub().returns(true);
    let spy = sinon.spy();
    let clock = sinon.useFakeTimers();
    sinon.match({
      one: 1,
      two: 2,
      three: 3,
    });

    assert.ok(true);
  });
});
