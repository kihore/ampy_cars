const express = require("express");
const app = express();

app.get("/get", (req,res) =>{
    console.log("connected to react");
    res.redirect("/");
});

const PORT = 9000;
app.listen(PORT, console.log('server started at ${PORT}'));