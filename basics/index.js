const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world!!!! For sure 3");
});

app.listen(port, () => {

    console.log("Not running on PORT" + port);
});