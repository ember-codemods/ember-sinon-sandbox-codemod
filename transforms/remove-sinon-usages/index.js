const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  function transformSinonIdentifier() {
    let sinon = root.find(j.Identifier, {
      name: 'sinon',
    });

    sinon.replaceWith(j.identifier('this.sandbox'));
  }

  transformSinonIdentifier();

  return root.toSource({
    quote: 'single',
    wrapColumn: 100,
    trailingComma: true,
  });
};
