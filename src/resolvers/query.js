function manyQuery(event, parent, args, context, info) {
  const where = args.where ? args.where : {};
  const orderBy = args.orderBy ? args.orderBy : undefined;
  const skip = args.skip ? args.skip : undefined;
  const first = args.first ? args.first : undefined;
  const last = args.last ? args.last : undefined;
  const query = context.prisma[event];
  return query({
    where,
    orderBy,
    skip,
    first,
    last
  });
}
function users(parent, args, context, info) {
  return manyQuery("users", parent, args, context, info);
}
function products(parent, args, context, info) {
  return manyQuery("products", parent, args, context, info);
}
function userProducts(parent, args, context, info) {
  return manyQuery("userProducts", parent, args, context, info);
}
function locations(parent, args, context, info) {
  //console.log(manyQuery("users", parent, args, context, info).score);
  return manyQuery("locations", parent, args, context, info);
}
function userBags(parent, args, context, info) {
  //console.log(manyQuery("users", parent, args, context, info).score);
  return manyQuery("userBags", parent, args, context, info);
}
function user(parent, { where }, context, info) {
  return context.prisma.user(where);
}
function product(parent, { where }, context, info) {
  return context.prisma.product(where);
}
function userProduct(parent, { where }, context, info) {
  return context.prisma.userProduct(where);
}
function location(parent, { where }, context, info) {
  return context.prisma.location(where);
}
function userBag(parent, { where }, context, info) {
  return context.prisma.userBag(where);
}

module.exports = {
  users,
  products,
  userProducts,
  locations,
  user,
  userProduct,
  product,
  location,
  userBag,
  userBags
};
