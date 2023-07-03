import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model'
import productService from '../../../src/services/product.service';
import { describe, it } from 'mocha';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('funcao creatProduct', function(){
    it('testa se a funcao cria um novo produto', async function() {
      const mockProduct = {id: 1,name: 'teste', price: '5 porcos', orderId: 4}
      const outId = {name: 'teste', price: '5 porcos', orderId: 4}

      const mockModel = ProductModel.build(mockProduct)

      sinon.stub(ProductModel, 'create').resolves(mockModel)

      const result = await productService.createProduct(outId)

      expect(result.status).to.eq('SUCCESSFUL')
      expect(result.data).to.deep.eq(mockProduct)
    })
  })
  it('  retorna uma lista de todos produtos com sucesso ', async function () {
    const productMockModel = [ProductModel.build({
      id: 8,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4,
    })];
   
    sinon.stub(ProductModel, 'findAll').resolves(productMockModel);
    const products = {
      id: 8,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4,
    };
    const result = await productService.findAll();
    expect(result.status).to.eq('SUCCESSFUL');
  })
});