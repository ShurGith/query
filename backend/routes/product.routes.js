import { Router } from 'express';
import { getProducts, getProductById, 
    newProduct, updateProduct, 
    deleteProduct } from '../controllers/product_controller.js';
const router = Router();

// GET all products
router.get('/products', getProducts);

// GET a single product by ID
router.get('/products/:id', getProductById);

// POST a new product
router.post('/products', newProduct);

// PUT (update) a product by ID
router.put('/products/:id', updateProduct);

// DELETE a product by ID
router.delete('/products/:id', deleteProduct);

export default router;