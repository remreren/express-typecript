"use strict";

const config = require("dotenv");

if (process.env.NODE_ENV !== "production") {
    const result = config.config();
    console.log(result.parsed);
    if (result.error) {
        console.log("There was an error while reading env vars.");
        throw result.error;
    }
}

const conf = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
}

module.exports = conf;