function createProduct(parent, { data }, context, info) {
  return context.prisma.createProduct(data);
}

function createUser(parent, { data }, context, info) {
  return context.prisma.createUser(data);
}

function createUserProduct(parent, { data }, context, info) {
  return context.prisma.createUserProduct(data);
}
function createLocation(parent, { data }, context, info) {
  return context.prisma.createLocation(data);
}
// update
function updateProduct(parent, { data, where }, context, info) {
  return context.prisma.updateProduct({
    data,
    where
  });
}
function updateUser(parent, { data, where }, context, info) {
  return context.prisma.updateUser({
    data,
    where
  });
}
function updateUserProduct(parent, { data, where }, context, info) {
  return context.prisma.updateUserProduct({
    data,
    where
  });
}
function updateLocation(parent, { data, where }, context, info) {
  return context.prisma.updateLocation({
    data,
    where
  });
}

// delete
function deleteProduct(parent, { where }, context, info) {
  return context.prisma.deleteProduct(where);
}
function deleteUser(parent, { where }, context, info) {
  return context.prisma.deleteUser(where);
}
function deleteUserProduct(parent, { where }, context, info) {
  return context.prisma.deleteUserProduct(where);
}
function deleteLocation(parent, { where }, context, info) {
  return context.prisma.deleteLocation(where);
}

// add update and delete mutations
module.exports = {
  createProduct,
  createUser,
  createUserProduct,
  createLocation,
  deleteProduct,
  deleteUser,
  deleteUserProduct,
  deleteLocation,
  updateProduct,
  updateUser,
  updateUserProduct,
  updateLocation
};
