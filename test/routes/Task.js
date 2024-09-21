module.exports = (app) => {
  const controller = require("../controllers/Task.js");
  const router = require("express").Router();

  router.post("/tasks",controller.create);
  app.use("/", router);
}
