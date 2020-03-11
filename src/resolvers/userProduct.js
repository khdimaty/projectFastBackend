function product(parent, args, context) {
  return context.prisma.userProduct({ id: parent.id }).product();
}
function user(parent, args, context) {
  return context.prisma.userProduct({ id: parent.id }).user();
}
module.exports = { product, user };
