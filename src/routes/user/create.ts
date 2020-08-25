import { Router } from "express";
import User from "../../data/models/user";
const createUser: Router = Router();

createUser.post("/user/create", (req, res, next) => {
    const data = req.body;

    User.create(data)
        .then(() => {
            res.status(200).send({ message: "User successfully created." });
            next();
        })
        .catch((err: MongoError) => {
            res.status(500).send(err.keyPattern != null ? { message: ("Parameter [" + Object.keys(err.keyPattern)[0] + "] already defined.") } : { message: ("Parameters [" + Object.keys(err.errors) + "] not sent.")});
        });
});

type MongoError = {
    errors,
    driver: boolean,
    index: number,
    code: number,
    keyPattern,
    keyValue
}

export default createUser;