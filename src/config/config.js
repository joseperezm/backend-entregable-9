const dotenv = require("dotenv");
const program = require("../utils/commander.js");

const {mode} = program.opts(); 

dotenv.config({
    path: mode === "produccion" ? "./.env.production": "./.env.development"
});

const configObject = {
    SESSION_SECRET: process.env.SESSION_SECRET,
    MONGODB_URI: process.env.MONGODB_URI
}

module.exports = configObject;