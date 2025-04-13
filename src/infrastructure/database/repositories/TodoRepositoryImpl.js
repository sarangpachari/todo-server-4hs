const { prisma } = require("../../../config/db");

module.exports = () => ({
    create: async (data) => await prisma.Todo.create({ data }),

});
