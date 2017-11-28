import { moduleForAcceptance, test } from 'ember-qunit';
import { before } from './before';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach: before,
});

test('it happens', function(assert) {
  assert.ok(true);
});
