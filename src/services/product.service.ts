import ProductModel, {
  ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

async function createProduct(
  newProduct:ProductInputtableTypes,
): Promise<ServiceResponse<ProductInputtableTypes>> {
  const result = await ProductModel.create(newProduct);

  const responseService: ServiceResponse<ProductInputtableTypes> = { 
    status: 'SUCCESSFUL',
    data: result.dataValues };
  return responseService;
}
async function findAll(): Promise<ServiceResponse<Product[]>> {
  const products = await ProductModel.findAll();
  const serviceResponse: ServiceResponse<Product[]> = {
    status: 'SUCCESSFUL', data: products.map((p) => p.dataValues) };
  return serviceResponse;
}
export default {
  createProduct,
  findAll,
};