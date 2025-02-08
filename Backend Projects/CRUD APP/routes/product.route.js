import express from 'express';
import Product from '../models/product.model.js';
import { getAllProducts, getSingleProducts } from '../controller/product.controller.js';``

const router = express.Router();
router.get("/", getAllProducts)
router.get("/:id", getSingleProducts)

export default router