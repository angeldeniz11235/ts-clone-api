// const { mongoose } = require(".");

module.exports = mongoose => {
    return mongoose.model(
        "team_model",
        user_Schema = new mongoose.Schema({
            team_name: String,
            team_sport: String
        }));
}