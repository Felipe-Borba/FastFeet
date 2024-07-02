const { prisma, request, getUserTokenByCpf } = require("../utils");

describe("Recipient routes", () => {
  const name = "Toni";

  beforeEach(async () => {
    await prisma.recipient.deleteMany({ where: { name } });
  });

  describe("Create Recipient", () => {
    test("Given no credentials then should return error", async () => {
      const result = await request.post("/recipient/").send({ name });

      expect(result.status).toBe(403);
      expect(result.body).toEqual({ message: "jwt token não informado" });
    });

    test("Given all correct params then should create a recipient", async () => {
      const token = await getUserTokenByCpf("123");

      const result = await request
        .post("/recipient/")
        .set("Authorization", `Bearer ${token}`)
        .send({ name });

      const recipients = await prisma.recipient.findMany({ where: { name } });
      expect(result.status).toBe(200);
      expect(result.body.name).toEqual(recipients[0].name);
      expect(result.body.id).toEqual(recipients[0].id);
    });

    test("Given no params should return error with required params", async () => {
      const token = await getUserTokenByCpf("123");

      const result = await request
        .post("/recipient/")
        .set("Authorization", `Bearer ${token}`)
        .send({});

      expect(result.status).toBe(400);
      expect(result.body).toEqual({
        message: ["field name é obrigatório"],
      });
    });
  });
});
