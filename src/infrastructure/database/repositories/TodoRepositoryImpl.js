const { prisma } = require("../../../config/db");

module.exports = () => ({
  create: async (data) => await prisma.todo.create({ data }),

  getById: async (id) => {
    return await prisma.todo.findMany({
      where: { creatorId: id },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getFovouriteTodo: async (id) => {
    return await prisma.todo.findMany({
      where: { isFavourite: true, creatorId: id },
      orderBy: {
        updatedAt: "desc",
      },
    });
  },
  getOngoingTodo: async (id) => {
    return await prisma.todo.findMany({
      where: { status: "ongoing", creatorId: id },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getCompletedTodo: async (id) => {
    return await prisma.todo.findMany({
      where: { status: "completed", creatorId: id },
      orderBy: {
        updatedAt: "desc",
      },
    });
  },
  getSearchedTodo: async (id, search) => {
    return await prisma.todo.findMany({
      where: {
        AND: [
          { creatorId: id },
          {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { content: { contains: search, mode: "insensitive" } },
            ],
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  update: async (id, data) => {
    return await prisma.todo.update({
      where: { id },
      data: { status: data },
    });
  },
  updateFavourite: async (id, data) => {
    if (data == "true") {
      return await prisma.todo.update({
        where: { id },
        data: { isFavourite: true },
      });
    } else {
      return await prisma.todo.update({
        where: { id },
        data: { isFavourite: false },
      });
    }
  },
  delete: async (id) => {
    return await prisma.todo.delete({
      where: { id },
    });
  },
});
