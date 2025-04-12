const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to MongoDB with Prisma");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connectDB();

module.exports = { prisma };
