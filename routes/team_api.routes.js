module.exports = app => {
    const teams = require("../database/controller/teams_db_controller");
    var router = require("express").Router();
     // Create a new user
  router.post("/", teams.create);

  // Retrieve all users
  router.get("/", teams.findAll);

  // Retrieve all published users
 // router.get("/published", users.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id", teams.findOne);

  // Update a user with id
  router.put("/:id", teams.update);

  // Delete a user with id
  router.delete("/:id", teams.delete);

  // Create a new user
  router.delete("/", teams.deleteAll);

  app.use("/api/teams", router);
};