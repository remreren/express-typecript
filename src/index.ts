import express from "express";
import http, { request } from "http";
import morgan from "morgan";
import config from "../config.js";

import home from "./routes/index";

const app: express.Application = express();

const server: http.Server = http.createServer(app);

app.use(morgan("dev"));
app.set("port", config.PORT || 3000);

app.use(home);

app.use((req, res, next) => {
    res.statusCode = 404;
    res.statusMessage = "That endpoint doesn't exist. Route not found";
    next(res)
});

if (process.env.NODE_ENV !== "production") {
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).json({
            message: err.statusMessage,
            error: err.statusCode
        });
    });
}

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        error: {
            message: err.statusMessage
        }
    });
});

if (process.env.NODE_ENV !== "production") {
    server.listen(app.get("port"), () => {
        console.log("Your Node app is running on port", app.get("port"));
    });
} else {
    server.listen(app.get("port"), () => {
        console.log("Your Node app is running on port", app.get("port"));
    });
}

export default app;