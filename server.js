const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = require("./Route")
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
//parse request of content-type - application/json
app.use(bodyParser.json());
//parse request of content-type - apllication/x-ww-form-urllencoded
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/api', router.routes)
//simple route
app.get("/", (req,res) =>{
    res.json({
        message:"Welcome to maisonier gestion application"
    })
})
// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
})
// 