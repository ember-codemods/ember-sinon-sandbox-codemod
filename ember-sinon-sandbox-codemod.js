function isSandboxAssignment(j, node) {
  return (
    j.MemberExpression.check(node.left) &&
    j.ThisExpression.check(node.left.object) &&
    j.Identifier.check(node.left.property) &&
    node.left.property.name === "sandbox"
  );
}

function isSandboxCreation(j, node) {
  return (
    j.CallExpression.check(node.right) &&
    j.MemberExpression.check(node.right.callee) &&
    j.MemberExpression.check(node.right.callee.object) &&
    node.right.callee.object.object.name === "sinon" &&
    node.right.callee.object.property.name === "sandbox" &&
    node.right.callee.property.name === "create"
  );
}

function isSandboxCreationExpression(j, node) {
  return isSandboxAssignment(j, node) && isSandboxCreation(j, node);
}

// Press ctrl+space for code completion
module.exports = function(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.AssignmentExpression)
    .filter(({ node }) => {
      return isSandboxCreationExpression(j, node);
    })
    .remove()
    .toSource();
};
