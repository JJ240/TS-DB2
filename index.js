require('dotenv').config({ path: './config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const productRoute = require("./routes/productRoute")

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/product", productRoute);

//Routing
app.get("/",(req, res)=>{
    res.send("welcome to product <a href='http://localhost:999/product'></a> ");
});

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

