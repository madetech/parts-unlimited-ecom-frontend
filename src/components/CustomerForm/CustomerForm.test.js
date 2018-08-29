import { promises as fsPromises } from 'fs';
import { onSubmit } from '../CustomerForm'
import SaveCustomerDetails from '../../useCases/SaveCustomerDetails';

describe('CustomerForm', () => {
  describe('onSubmit handler', () => {
    const eventStub = { preventDefault: () => 'stub'}
    const customData = {
      customerName: "Barry Barlow",
      shippingCity: "London",
      billingPostcode: "N1 0UT"
    }

    it('writes data to customer details file', async () => {
      await onSubmit(new SaveCustomerDetails())(eventStub, customData);
      const customer_details = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')
      return expect(customer_details).toEqual(JSON.stringify(customData))
    })
  })
})
