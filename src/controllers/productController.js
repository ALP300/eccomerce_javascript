import ProductModel from "../models/productModel.js";

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await ProductModel.getAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await ProductModel.getById(id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const newProduct = await ProductModel.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedProduct = await ProductModel.update(id, req.body);
      if (!updatedProduct) {
        return res.status(404).json({ message: "Producto no encontrado para actualizar" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await ProductModel.delete(id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Producto no encontrado para eliminar" });
      }
      res.status(200).json({ message: "Producto eliminado", product: deletedProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default productController;
