const mongoose = require('mongoose');
const express = require('express');
const ads = require('./routes/ads');
const app = express();

mongoose.connect('mongodb://localhost/adsdashboard',{ useNewUrlParser: true })
.then(() =>console.log("Connected to DB"))
.catch( err =>console.error("faild connected"));


app.use(express.json());
app.use("/dbsDashboard", ads);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})





