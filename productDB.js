require("dotenv").config();
const connectDB = require("./db/connect")
const Product = require("./models/Product")
const productJson = require("./products.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start();