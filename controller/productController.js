exports.getProducts = async (req,res)=>{
    res.send(`get all products`);
}

exports.getProductID = async (req, res)=>{
    res.send(`get product from id : ${req.params.id}`)
}

exports.getProductName = async (req, res)=>{
    res.send(`get product by name : ${req.params.name}`)
}

exports.getProductType = async (req, res)=>{
    res.send(`get product by type : ${req.params.type}`)
}

exports.getProductPrice = async (req, res)=>{
    res.send(`get product by price : ${req.params.price}`)
}

exports.addProduct = async (req, res)=>{
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.type);
    res.send("add a product");
}

exports.editProduct = async (req, res)=>{
    res.send(`edit product by id : ${req.params.id}`)
}

exports.deleteProduct = async (req, res)=>{
    res.send(`delete product by id : ${req.params.id}`)
}

