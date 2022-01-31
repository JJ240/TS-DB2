const express = require('express');
const app = express.Router();
const productController = require('../controller/productController')

app.get("/", productController.getProducts);

app.get("/:id", productController.getProductID);

app.get("/name/:name", productController.getProductName);

app.get("/type/:type", productController.getProductType);

app.get("/price/:price", productController.getProductPrice);

app.post("/", productController.addProduct);

app.put("/:id", productController.editProduct);

app.patch("/:id", productController.editProduct);

app.delete("/:id", productController.deleteProduct);

//////////////////////////////////////////////////////////////////////////

module.exports = app;
