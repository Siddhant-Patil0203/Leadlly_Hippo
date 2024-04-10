import express from "express";
import {createProduct, getProducts } from "../controllers/products";
import authUser from '../middlewares/authUser';

const router = express.Router();

router.get("/fetch",getProducts);
router.post("/create", authUser ,createProduct);

export default router;