import sinon from 'sinon';
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach() {
    // setup the sandbox
    this.sandbox = sinon.sandbox.create();
  },

  afterEach() {},
});

test('it happens', function(assert) {
  assert.ok(true);
});
