import Product from "../models/Products";

export async function createProduct(req, res) {
  const newProduct = new Product(req.body);

  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
}

export async function getProducts(req, res) {
  const products = await Product.find();

  res.status(200).json(products);
}

export async function getProductById(req, res) {
  console.log(req.params);
  const product = await Product.findById(req.params.productId);

  res.status(200).json(product);
}

export async function updateProductById(req, res) {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );

  res.status(204).json(updatedProduct);
}

export async function deleteProductById(req, res) {
  const deletedProduct = await Product.findByIdAndDelete(req.params.productId);

  res.status(204).json(deletedProduct);
}
