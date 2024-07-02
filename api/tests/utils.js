const { PrismaClient } = require("@prisma/client");
const { sign } = require("jsonwebtoken");
const supertest = require("supertest");
const app = require("../src/server");

const prisma = new PrismaClient();

const getUserTokenByEmail = async (cpf = "123") => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { cpf },
  });

  const token = sign({ user }, "development", {
    expiresIn: 86400, // expira em 24 horas
  });

  return token;
};

const request = supertest(app);

module.exports = {
  request,
  getUserTokenByEmail,
  prisma,
};
