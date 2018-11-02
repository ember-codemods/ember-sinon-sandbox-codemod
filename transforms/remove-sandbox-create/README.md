# remove-sandbox-create

## Usage

```
npx ember-sinon-sandbox-codemod remove-sandbox-create path/of/files/ or/some**/*glob.js

# or

yarn global add ember-sinon-sandbox-codemod
ember-sinon-sandbox-codemod remove-sandbox-create path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->

- [sinon.sandbox.create.empty.beforeeach](#sinon.sandbox.create.empty.beforeeach)
- [sinon.sandbox.create.funcref.beforeeach](#sinon.sandbox.create.funcref.beforeeach)
- [sinon.sandbox.create.nonempty.beforeeach](#sinon.sandbox.create.nonempty.beforeeach)
- [sinon.sandbox.restore.empty.aftereach](#sinon.sandbox.restore.empty.aftereach)
- [sinon.sandbox.restore.nonempty.aftereach](#sinon.sandbox.restore.nonempty.aftereach)
  <!--FIXTURES_TOC_END-->

## <!--FIXTURES_CONTENT_START-->

<a id="sinon.sandbox.create.empty.beforeeach">**sinon.sandbox.create.empty.beforeeach**</a>

**Input** (<small>[sinon.sandbox.create.empty.beforeeach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.create.empty.beforeeach.input.js)</small>):

```js
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
```

**Output** (<small>[sinon.sandbox.create.empty.beforeeach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.create.empty.beforeeach.output.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {});

test('it happens', function(assert) {
  assert.ok(true);
});
```

---

<a id="sinon.sandbox.create.funcref.beforeeach">**sinon.sandbox.create.funcref.beforeeach**</a>

**Input** (<small>[sinon.sandbox.create.funcref.beforeeach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.create.funcref.beforeeach.input.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';
import { before } from './before';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach: before,
});

test('it happens', function(assert) {
  assert.ok(true);
});
```

**Output** (<small>[sinon.sandbox.create.funcref.beforeeach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.create.funcref.beforeeach.output.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';
import { before } from './before';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach: before,
});

test('it happens', function(assert) {
  assert.ok(true);
});
```

---

<a id="sinon.sandbox.create.nonempty.beforeeach">**sinon.sandbox.create.nonempty.beforeeach**</a>

**Input** (<small>[sinon.sandbox.create.nonempty.beforeeach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.create.nonempty.beforeeach.input.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach() {
    otherSetup();
    // setup the sandbox
    this.sandbox = sinon.sandbox.create();
  },

  afterEach() {},
});

test('it happens', function(assert) {
  assert.ok(true);
});
```

**Output** (<small>[sinon.sandbox.create.nonempty.beforeeach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.create.nonempty.beforeeach.output.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach() {
    otherSetup();
  },
});

test('it happens', function(assert) {
  assert.ok(true);
});
```

---

<a id="sinon.sandbox.restore.empty.aftereach">**sinon.sandbox.restore.empty.aftereach**</a>

**Input** (<small>[sinon.sandbox.restore.empty.aftereach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.restore.empty.aftereach.input.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach() {
    // setup the sandbox
    this.sandbox = sinon.sandbox.create();
  },

  afterEach() {
    this.sandbox.restore();
  },
});

test('it happens', function(assert) {
  assert.ok(true);
});
```

**Output** (<small>[sinon.sandbox.restore.empty.aftereach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.restore.empty.aftereach.output.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {});

test('it happens', function(assert) {
  assert.ok(true);
});
```

---

<a id="sinon.sandbox.restore.nonempty.aftereach">**sinon.sandbox.restore.nonempty.aftereach**</a>

**Input** (<small>[sinon.sandbox.restore.nonempty.aftereach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.restore.nonempty.aftereach.input.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  beforeEach() {
    // setup the sandbox
    this.sandbox = sinon.sandbox.create();
  },

  afterEach() {
    otherTeardown();
    this.sandbox.restore();
  },
});

test('it happens', function(assert) {
  assert.ok(true);
});
```

**Output** (<small>[sinon.sandbox.restore.nonempty.aftereach.input.js](transforms/remove-sandbox-create/__testfixtures__/sinon.sandbox.restore.nonempty.aftereach.output.js)</small>):

```js
import { moduleForAcceptance, test } from 'ember-qunit';

moduleForAcceptance('foo', 'Acceptance | Foo', {
  afterEach() {
    otherTeardown();
  },
});

test('it happens', function(assert) {
  assert.ok(true);
});
```

<!--FIXTURE_CONTENT_END-->
