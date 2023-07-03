import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { describe, it } from 'mocha';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { OrderSequelizeModel } from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import orderService from '../../../src/services/order.service';
import orderController from '../../../src/controllers/order.controller';
chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Testa se e listado todas as orders na camada controller', async function () {
    const response: ServiceResponse<OrderSequelizeModel[]> = {
      status: 'SUCCESSFUL',
      data: [orderMock.order] as any,
    }

    sinon.stub(orderService, 'findAll').resolves(response as any);

    await orderController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([orderMock.order]);
  });
});
