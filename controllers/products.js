const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    let apiData = Product.find(queryObject);
    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // pagination code
    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 6
    let skip = (page - 1) * limit

    apiData = apiData.skip(skip).limit(limit);

    // console.log(queryObject);
    const Products = await apiData;
    res.status(200).json({ Products, lenght: Products.length });
}

const getAllProductsTesting = async (req, res) => {
    const MyData = await Product.find(req.query);
    // console.log(req.query);
    res.status(200).json({ MyData });
}

module.exports = { getAllProducts, getAllProductsTesting };

