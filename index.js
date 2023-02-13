const express = require("express");
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send("Hello World")
});
app.get('/nsbm', (req, res) => {
    res.send("Steps Into DevOps 2023")
});
app.listen( PORT, () => console.log("Server is listening to port " + PORT));