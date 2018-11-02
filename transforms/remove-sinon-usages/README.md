# remove-sinon-usages


## Usage

```
npx ember-sinon-sandbox-codemod remove-sinon-usages path/of/files/ or/some**/*glob.js

# or

yarn global add ember-sinon-sandbox-codemod
ember-sinon-sandbox-codemod remove-sinon-usages path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [transform.sinon.to.sandbox](#transform.sinon.to.sandbox)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="transform.sinon.to.sandbox">**transform.sinon.to.sandbox**</a>

**Input** (<small>[transform.sinon.to.sandbox.input.js](transforms/remove-sinon-usages/__testfixtures__/transform.sinon.to.sandbox.input.js)</small>):
```js
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

```

**Output** (<small>[transform.sinon.to.sandbox.input.js](transforms/remove-sinon-usages/__testfixtures__/transform.sinon.to.sandbox.output.js)</small>):
```js
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

```
<!--FIXTURE_CONTENT_END-->