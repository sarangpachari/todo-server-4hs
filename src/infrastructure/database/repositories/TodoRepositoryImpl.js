const { prisma } = require("../../../config/db");

module.exports = () => ({
    create: async (data) => await prisma.todo.create({ data }),

    getById: async (id) => {
        return await prisma.todo.findMany({
            where: { creatorId: id },
        })
    },
    getFovouriteTodo: async (id) => {
        return await prisma.todo.findMany({
            where: { isFavourite: true, creatorId: id },
        })
    },
    getOngoingTodo: async (id) => {
        return await prisma.todo.findMany({
            where: { status: "ongoing", creatorId: id },
        })
    },
    getCompletedTodo: async (id) => {
        return await prisma.todo.findMany({
            where: { status: "completed", creatorId: id },
        })
    },
    update: async (id, data) => {
        return await prisma.todo.update({
          where: { id },         
          data: { status:data }
        });
      },
      updateFavourite: async (id,data) => {
        return await prisma.todo.update({
            where: { id },
            data: { isFavourite},
    });
    
      },
      delete : async (id, ) => {
        return await prisma.todo.delete({
          where: { id }             
        });
      },
      
});

