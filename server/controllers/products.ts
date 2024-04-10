import { Request, Response } from 'express';
import products from "../models/propducts";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const fetchProducts = await products.find({});
    res.status(200).json({
      success: true,
      fetchProducts,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      Message: "Unable to get Products",
    });
  }
};

interface CustomRequest extends Request {
    email?: string;
    userId?: string;
}

export const createProduct = async (req: CustomRequest, res: Response) => {
  const {
    title,
    img,
    price,
  } = req.body;
  const userId = req.userId;
  try {
    const createProduct = await products.create({
        user: userId,
        title,
        price,
        img
    });
    res.status(200).json({
      success: true,
      message: "Product Created Sucessfully!",
      createProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
