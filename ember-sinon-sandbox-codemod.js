// Press ctrl+space for code completion
module.exports = function(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  function isSandboxAssignment(node) {
    return (
      j.MemberExpression.check(node.left) &&
      j.ThisExpression.check(node.left.object) &&
      j.Identifier.check(node.left.property) &&
      node.left.property.name === "sandbox"
    );
  }

  function isSandboxCreation(node) {
    return (
      j.CallExpression.check(node.right) &&
      j.MemberExpression.check(node.right.callee) &&
      j.MemberExpression.check(node.right.callee.object) &&
      node.right.callee.object.object.name === "sinon" &&
      node.right.callee.object.property.name === "sandbox" &&
      node.right.callee.property.name === "create"
    );
  }

  function isSandboxCreationExpression(node) {
    return isSandboxAssignment(node) && isSandboxCreation(node);
  }

  function removeSandboxCreates() {
    root
      .find(j.AssignmentExpression)
      .filter(({ node }) => {
        return isSandboxCreationExpression(node);
      })
      .remove();
  }

  removeSandboxCreates();

  return root.toSource();
};
