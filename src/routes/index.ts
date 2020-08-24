import express from "express";

const router = express.Router();

router.get('/', function(req, res) {
    return res.status(200).send({
        success: "you have connected succesfully!"
    });
});

export default router;