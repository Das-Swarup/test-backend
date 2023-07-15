const express = require("express")
const cors = require("cors")
const router = require("./router")
const bodyParser = require("body-parser")

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use(cors());
app.listen(port,()=>{console.log(`Listening to port "${port}" `);})
app.use("/", router)
app.use("/users", router)