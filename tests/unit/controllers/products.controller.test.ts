
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { ProductInputtableTypes } from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';
import productController from '../../../src/controllers/product.controller';
import { Product } from '../../../src/types/Product';
import productMock from '../../mocks/product.mock';
import { describe, it } from 'mocha';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  describe('funcao createProduct', function() {
    it('testa se a funcao cria um novo produto' , async function() {
      req.body = {name: 'teste', price: '5 porcos', orderId: 4}

      const mockProduct = {id: 1,name: 'teste', price: '5 porcos', orderId: 4}
      

      const serviceResponse: ServiceResponse<ProductInputtableTypes> = {
        status: 'SUCCESSFUL',
        data: mockProduct
      }

      sinon.stub(productService, 'createProduct').resolves(serviceResponse)

      await productController.createProduct(req, res)
      expect(res.status).to.have.been.calledWith(201)
      expect(res.json).to.have.been.calledWith(mockProduct)
    })
  })
  describe('funcao findAll', function () {
    it('testa se retorna uma lista com todos os  produtos', async function () {
      const serviceResponse: ServiceResponse<Product[]> = {
        status: 'SUCCESSFUL',
        data: [productMock.validResponse],
      }
      sinon.stub(productService, 'findAll').resolves(serviceResponse);

      await productController.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([productMock.validResponse]);
    });
  })
});