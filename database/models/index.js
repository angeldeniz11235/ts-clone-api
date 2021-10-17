const dbConfig = require("../config.js");

const mongoose = require("mongoose");

const db = {};
db.url = dbConfig.url;
db.mongoose = mongoose;

const user_db = {};
user_db.mongoose = db.mongoose;
user_db.url = db.url;
user_db.users = require("./user_model")(mongoose);

const team_db = {};
team_db.mongoose = db.mongoose;
team_db.url = db.url;
team_db.teams = require("./team_model")(mongoose);

module.exports = {
    db: db,
    user_db: user_db,
    team_db: team_db
};