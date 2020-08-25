import mongoose from "mongoose";
import config from "../../config.js"

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const db : mongoose.Connection = mongoose.connection;
db.on('error', err => {
    console.error.bind(console, 'connection error: ');
    console.error (
        'There was an error while connecting to the database : ' + err
      );
});

db.on('connected', () => {
    console.log ('Database successfully connected to: ' + config.MONGODB_URI);
});

db.once('open', () => {
    console.log ('Database connection is now open');
})
.on('disconnected', () => {
    console.log ('Database disconnected');
});

export default db;