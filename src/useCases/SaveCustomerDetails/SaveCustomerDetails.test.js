import SaveCustomerDetails from '.';
import { promises as fsPromises } from 'fs';

describe('SaveCustomerDetails', () => {
  it('can read a response', async () => {
    var response = JSON.stringify({successful: false, errors: []})
    await fsPromises.writeFile('/tmp/responseFromCustomerDetails.json', response);

    const useCase = new SaveCustomerDetails();
    const result = await useCase.execute({});

    return expect(result).toEqual({successful: false, errors: []});
  });

  it('can call remote server with the data', async () => {
      var custData = {
        customerName: "Barry",
        shippingAddressLine1: "136 Southwark Street",
        shippingAddressLine2: "Southwark",
        shippingCity: "London",
        shippingCounty: "Greater London",
        shippingPostcode: "SE1 0SW",
        shippingPhoneNumber: "07912345671",
        shippingEmailAddress: "barry@gmail.com",
        billingAddressLine1: "136 Southwark Street",
        billingAddressLine2: "Southwark",
        billingCity: "London",
        billingCounty: "Greater London",
        billingPostcode: "SE1 0SW",
        billingPhoneNumber: "07912345671",
        billingEmailAddress: "barry@gmail.com"
      }
      const useCase = new SaveCustomerDetails();
      await useCase.execute(custData)
      var result = await fsPromises.readFile('/tmp/customer-details.json', 'utf8')

      return expect(result).toEqual(JSON.stringify(custData))
    })
})
