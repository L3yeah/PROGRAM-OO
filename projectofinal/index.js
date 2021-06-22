const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const employeesRouter = require("./routes/employees");
const cors =require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());
app.use("/api/v1",employeesRouter);
app.listen(3000,() => {console.log("app running on port 3000")})