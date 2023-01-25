require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get('/', (req, res) => {
    res.send("Starting coding bro Enjoy");
});

app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Yes I am Connected ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
} 
start();
