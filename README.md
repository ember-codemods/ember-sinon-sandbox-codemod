# ember-sinon-sandbox-codemod


A collection of codemod's for ember-sinon-sandbox-codemod.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember-sinon-sandbox-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-sinon-sandbox-codemod
ember-sinon-sandbox-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [remove-sandbox-create](transforms/remove-sandbox-create/README.md)
* [remove-sinon-usages](transforms/remove-sinon-usages/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`