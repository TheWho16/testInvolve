export default class InvolveServise {

  _baseUrl = `https://involve-it.com/test_front/api`


  async getResourse(url) {
    const res = await fetch(`${this._baseUrl}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`, `, received ${res.status}`)
    }
    return await res.json();
  }

  getMetod = async () => {
    const res = await this.getResourse(`/payMethods`)
    return res
  }

  getCanculate = async (data) => {
    const res = await fetch(`${this._baseUrl}/payMethods/calculate?` + new URLSearchParams({
      base: data.base,
      amount: data.amount,
      invoicePayMethod: data.invoicePayMethod,
      withdrawPayMethod: data.withdrawPayMethod,
    }))
    return await res.json()
  }



  postMoney = async (data = {}) => {
    const response = await fetch(`${this._baseUrl}/bids`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}