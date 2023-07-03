import { expect } from 'chai';
import sinon from 'sinon';
import { describe, it } from 'mocha';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import orderService from '../../../src/services/order.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa se e listado todas as orders na camada service', async function () {
    const mockReturn = OrderModel.build(orderMock.order);

    sinon.stub(OrderModel, 'findAll').resolves([mockReturn]);

    const response = await orderService.findAll();

    expect(response.status).to.eq('SUCCESSFUL');
  });
});
