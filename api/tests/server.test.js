const { request } = require("./utils");

describe("server", () => {
  test("GET /", async () => {
    const result = await request.get("/wealth-check");

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ message: "Ok" });
  });
});

describe("Jest healthy check", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(2 + 1).toBe(3);
  });
});
