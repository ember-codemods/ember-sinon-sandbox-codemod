import sinon from 'sinon';
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  afterEach() {
    otherTeardown();
  },
});

test('it happens', function(assert) {
  assert.ok(true);
});
