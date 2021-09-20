const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();


mongoose
    .connect(
        process.env.MONGO_URI
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(console.log('Connected to MongoDB'))
    .catch((error) => {
        console.log(error);
    });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



app.listen(5001, () => {
    console.log('Server is runnong', 'http://localhost:5001');
})