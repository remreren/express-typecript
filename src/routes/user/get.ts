import User from "../../data/models/user"
import { Router } from "express";

const getUser: Router = Router();

getUser.get('/user/:userId', (req, res, next) => {
    User.findById(req.params.userId, { __v: false })
        .then((user) => {
            const userSchema = user.toObject();
            if (!userSchema) {
                res.status(404).send();
                next();
            }
            userSchema.id = userSchema._id;
            delete userSchema._id;

            res.status(200).send(userSchema);
            next();
        })
        .catch((err: MongoError) => {
            res.status(500).send(err);
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

export default getUser;