const route = require("express").Router();
const controller = require("../controllers/todoController");

route.get("/health-check", controller.healthCheck);
route.get("/", controller.readAll);
route.get("/:id", controller.readDetail);
route.post("/add", controller.create);
route.delete("/:id", controller.delete);

module.exports = route;
