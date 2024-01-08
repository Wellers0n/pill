import app from '../../../app'
import request from 'supertest'


describe('GET /product', () => {
  it('response product Neosaldina', async () => {

    const URL = 'https://www.drogasil.com.br/neosaldina-30-drageas.html'

    const data = {
      "message": "Produto encontrado com sucesso",
      "data": {
        "name": "Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas",
        "barcode": "7896094999992",
        "brand": "Neosaldina",
        "image": "https://img.drogasil.com.br/catalog/product/n/e/neosaldina-30-drageas-01.jpg?width=450&height=450&quality=85&type=resize",
        "price": "32.78"
      }
    }

    const response = await request(app).get('/product').query({ url: URL })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(data)
  })

  it('response product Dorflex', async () => {

    const URL = 'https://www.drogasil.com.br/dorflex-analgesico-com-50-comprimidos.html'

    const data = {
      "message": "Produto encontrado com sucesso",
      "data": {
        "name": "Dorflex analgésico e relaxante muscular 50 comprimidos",
        "barcode": "7891058020941",
        "brand": "Dorflex",
        "image": "https://img.drogasil.com.br/catalog/product/d/o/dorflex-com-50-comprimidos_10.jpg?width=450&height=450&quality=85&type=resize",
        "price": "22.39"
      }
    }

    const response = await request(app).get('/product').query({ url: URL })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(data)
  })
})
