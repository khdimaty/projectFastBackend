function locations(parent, args, context) {
  return context.prisma.user({ id: parent.id }).locations();
}

module.exports = { locations };
