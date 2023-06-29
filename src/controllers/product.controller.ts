import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;

  const product = await productService.createProduct({ name, price, orderId });
  return res.status(201).json(product.data);
}




export default { createProduct };