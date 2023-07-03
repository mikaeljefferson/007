import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function findAll(req: Request, res: Response): Promise<Response> {
  const response = await orderService.findAll();

  return res.status(200).json(response.data);
}

export default {
  findAll,
};