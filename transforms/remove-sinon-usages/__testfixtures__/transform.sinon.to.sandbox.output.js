import { module, test } from 'qunit';

module('Unit | blah', function(hooks) {
  test('blah', function(assert) {
    assert.expect(1);

    let stub = this.sandbox.stub().returns(true);
    let spy = this.sandbox.spy();
    let clock = this.sandbox.useFakeTimers();
    this.sandbox.match({
      one: 1,
      two: 2,
      three: 3,
    });

    assert.ok(true);
  });
});
