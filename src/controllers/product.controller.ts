import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;

  const product = await productService.createProduct({ name, price, orderId });
  return res.status(201).json(product.data);
}

async function findAll(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await productService.findAll();
  return res.status(200).json(serviceResponse.data);
}

export default {
  createProduct,
  findAll,
};