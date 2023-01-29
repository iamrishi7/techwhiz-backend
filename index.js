const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

mongoose.connect(`mongodb+srv://dezynation:${process.env.PASSWORD}@cluster0.4e0ya7l.mongodb.net/techwhiz`, {
    useNewUrlParser: true,
});

app.listen(3001, () => {
    console.log("Hello");
});