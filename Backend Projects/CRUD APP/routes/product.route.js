import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getSingleProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router();
router.get("/", getAllProducts)
router.get("/:id", getSingleProducts)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router