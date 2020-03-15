function user(parent, args, context) {
  return context.prisma.userBag({ id: parent.id }).user();
}
function userProducts(parent, args, context) {
  return context.prisma.userBag({ id: parent.id }).userProducts();
}
function location(parent, args, context) {
  return context.prisma.userBag({ id: parent.id }).location();
}
module.exports = { userProducts, user, location };
