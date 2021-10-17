// const { mongoose } = require(".");

module.exports = mongoose => {
    return mongoose.model(
        "reg_user_model",
        user_Schema = new mongoose.Schema({
            user_name: String,
            user_email: String
        }));
}