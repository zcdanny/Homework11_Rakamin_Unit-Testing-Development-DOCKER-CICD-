const app = require("../app");
const request = require("supertest");

describe("Todo Unit Test", () => {
  test("Get All Todo Successfully", (done) => {
    request(app)
      .get("/api/v1/todo")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data.length).toBe(5);
        done();
      })
      .catch(done);
  });

  test("Get Detail Todo Successfully", (done) => {
    request(app)
      .get("/api/v1/todo/1")
      .expect(200)
      .then((response) => {
        expect(response.body.data.title).toBe("Ramanda Danny");
        done();
      })
      .catch(done);
  });
  test("Create Todo Successfully", (done) => {
    const newTodo = {
      title: "Todo New",
    };
    request(app)
      .post("/api/v1/todo/add")
      .send(newTodo)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body.message).toBe("Todo created!");
        done();
      })
      .catch(done);
  });
  test("Delete Todo Successfully", (done) => {
    const id = 1;
    request(app)
      .delete(`/api/v1/todo/${id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Todo deleted!");
        done();
      })
      .catch(done);
  });
});
