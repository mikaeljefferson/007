import ProductModel, {
  ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(
  newProduct:ProductInputtableTypes,
): Promise<ServiceResponse<ProductInputtableTypes>> {
  const result = await ProductModel.create(newProduct);

  const responseService: ServiceResponse<ProductInputtableTypes> = { 
    status: 'SUCCESSFUL',
    data: result.dataValues };
  return responseService;
}

export default {
  createProduct,
};