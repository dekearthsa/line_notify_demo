const express = require("express");
const cors = require("cors");

const {controllerDebug} = require("../controller/controllerDebug");
const {controllerLine} = require("../controller/controllerLine");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(
    {origin: '*'}
));

app.get("/debug", controllerDebug);
app.post("/line", controllerLine)

// app.get("/line")

export {app}