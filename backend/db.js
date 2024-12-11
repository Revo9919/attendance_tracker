import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/attendance"

export const db = mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err) => {

    if (err) {
        console.log('DB Connection fails' + err);
    }

    else {
        console.log('Databse Connected....');
    }
});

