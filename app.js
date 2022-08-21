import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ejs from 'ejs';


import secretsRoutes from './Routes/secrets.js';

const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded(
    { extended: true }
));

// MIDDLEWARE
app.use("/", secretsRoutes);

// Connect to database
const CONNECTION_URL = "mongodb://localhost:27017/userDB";
// Connecting to the database

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)))
    .catch((err) => console.log("OPS !!"));

