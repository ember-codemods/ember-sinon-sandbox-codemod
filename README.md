
ember-sinon-sandbox-codemod
==============================================================================

This codemod is intended to automatically convert projects that use `sinon` explicitly to use `ember-sinon-sandbox`.

Installation
------------------------------------------------------------------------------

Install [`jscodeshift`](https://github.com/facebook/jscodeshift) to run the
codemod script:

```
npm install -g jscodeshift
```

Usage
------------------------------------------------------------------------------

```
jscodeshift -t https://rawgit.com/scalvert/ember-sinon-sandbox-codemod/master/ember-sinon-sandbox-codemod.js ./tests/
```

Credit
------------------------------------------------------------------------------
ember-sinon-sandbox-codemod is heavily inspired by the work done in [ember-qunit-codemod](https://github.com/rwjblue/ember-qunit-codemod)
largely by Robert Jackson. Thank you!
