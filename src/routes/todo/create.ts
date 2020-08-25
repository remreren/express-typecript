import { Router } from "express";
import Todo from "../../data/models/todo";
import User from "../../data/models/user";

const createTodo = Router();

createTodo.post('/todo/create', (req, res, next) => {
    const todo = req.body;

    User.findById(todo.userId)
        .then(user => {
            if (!user) {
                res.status(404).send();
                next();
            }

            Todo.create(todo)
                .then(task => {
                    res.status(200).send({ message: "Todo successfully created.", task: task });
                    next();
                })
                .catch((err: MongoError) => {
                    console.log(err);
                    res.status(500).send(err.keyPattern != null ? { message: ("Parameter [" + Object.keys(err.keyPattern)[0] + "] already defined.") } : { message: ("Parameters [" + Object.keys(err.errors) + "] not sent.")});
                });
        })
        .catch(err => {
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

export default createTodo;