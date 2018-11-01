import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach() {
    otherSetup();
  },
});

test('it happens', function(assert) {
  assert.ok(true);
});
