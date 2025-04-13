const { prisma } = require('../../../config/db');

module.exports = () => ({
    create: async (data) => await prisma.user.create({ data }),
    findByEmail: async (email) => await prisma.user.findUnique({ where: { email } })
});
