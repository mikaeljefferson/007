import { Router } from 'express';
import productController from '../controllers/product.controller';
import productValidate from '../middlewares/productValidate';

const productRouter = Router();

productRouter.post('/', productValidate, productController.createProduct);
productRouter.get('/', productController.findAll);

export default productRouter;