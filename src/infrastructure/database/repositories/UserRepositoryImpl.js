const { prisma } = require('../../../config/db');

module.exports = () => ({
    create: async (data) => await prisma.user.create({ data }),
    findByEmail: async (email) => await prisma.user.findUnique({ where: { email } }),
    delete : async (id, ) => {
        const userHasTodos = await prisma.todo.findMany({
            where: { creatorId: id }
          });
      
          if (userHasTodos.length > 0) {
            await prisma.todo.deleteMany({
              where: { creatorId: id }
            });
          }
          return await prisma.user.delete({
            where: { id }
      })
    }
});
