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
});