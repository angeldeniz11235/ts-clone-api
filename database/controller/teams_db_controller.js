const db = require("../models");
const Team = db.team_db.teams;

// Create and Save a new team
exports.create = (req, res) => {
  // Validate request
  if (!req.body.teamname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a team
  const team = new Team({
    team_name: req.body.teamname,
    team_sport: req.body.teamsport,
  });

  // Save team in the database
  team
    .save(team)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the team."
      });
    });
};

// Retrieve all teams from the database.
exports.findAll = (req, res) => {
  const queryString = req.query.query;
  var condition = queryString ? { title: { $regex: new RegExp(queryString), $options: "i" } } : {};

  Team.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teams."
      });
    });
};

// Find a single team with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Team.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found team with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving team with id=" + id });
    });
};

// Update a team by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Team.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update team with id=${id}. Maybe team was not found!`
        });
      } else res.send({ message: "team was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating team with id=" + id
      });
    });
};

// Delete a team with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Team.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete team with id=${id}. Maybe team was not found!`
        });
      } else {
        res.send({
          message: "team was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete team with id=" + id
      });
    });
};

// Delete all teams from the database.
exports.deleteAll = (req, res) => {
  Team.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} teams were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all teams."
      });
    });
};

// Find all published teams
// exports.findAllPublished = (req, res) => {
//   team.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving teams."
//       });
//     });
// };