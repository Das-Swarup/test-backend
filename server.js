const express = require("express")
const cors = require("cors")
const router = require("./router")

const app = express();
const port = 8000;

app.listen(port,()=>{console.log("Listening to port 8000");})
app.use("/", router)