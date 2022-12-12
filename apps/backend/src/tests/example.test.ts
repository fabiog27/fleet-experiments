const supertest = require("supertest");
const app = require("../main.ts");

const request = supertest(app)

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request
    .get("/api/greeting")
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Welcome, nice to meet you');
      done();
    });
  });
});