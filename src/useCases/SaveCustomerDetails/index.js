import fetch from 'isomorphic-fetch'

export default class SaveCustomerDetails{
  async execute(data){
    const res = await fetch(
      'http://127.0.0.1:3000/save-customer-details',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      });
    const json = await res.json();
    console.log("json", json)
    return json;
  }
}
