module.exports = function(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  function isEmptyMethod(node) {
    if (node.size() > 0) {
      let methodBody = node.find(j.FunctionExpression).get(0).node;

      return (
        methodBody &&
        methodBody.body &&
        methodBody.body.body &&
        !methodBody.body.body.length
      );
    }

    return true;
  }

  function findMethod(method) {
    return root.find(j.Property, { key: { name: method } });
  }

  function removeSandboxCreate() {
    const beforeEach = findMethod('beforeEach');

    let create = beforeEach.find(j.AssignmentExpression, {
      left: {
        type: 'MemberExpression',
        object: {
          type: 'ThisExpression',
        },
        property: {
          name: 'sandbox',
        },
      },
      right: {
        callee: {
          object: {
            type: 'MemberExpression',
            object: {
              name: 'sinon',
            },
            property: {
              name: 'sandbox',
            },
          },
          property: {
            name: 'create',
          },
        },
      },
    });

    create.remove();

    if (isEmptyMethod(beforeEach)) {
      beforeEach.remove();
    }
  }

  function removeSandboxRestore() {
    const afterEach = findMethod('afterEach');

    let restore = afterEach.find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: {
          type: 'MemberExpression',
          object: {
            type: 'ThisExpression',
          },
          property: {
            name: 'sandbox',
          },
        },
        property: { name: 'restore' },
      },
    });

    restore.remove();

    if (isEmptyMethod(afterEach)) {
      afterEach.remove();
    }
  }

  removeSandboxCreate();
  removeSandboxRestore();

  return root.toSource({
    quote: 'single',
    wrapColumn: 100,
    trailingComma: true,
  });
};
