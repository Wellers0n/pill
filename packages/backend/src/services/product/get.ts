import { NotFoundError } from '@/helpers/api-error';
import axios from 'axios'
import { load } from 'cheerio'

type Data = {
  url: string;
};

const getProductService = async (data: Data) => {
  const { url } = data

  let pageHTML

  try {
    pageHTML = await axios.get(url)
  } catch (error) {
    throw new NotFoundError('Produto não encontrado')
  }



  const $ = load(pageHTML.data)
  const product = JSON.parse($('[type="application/ld+json"]').text())

  const barcode = product.gtin13
  const name = product.name
  const brand = product.brand.name
  const image = product.image
  const price = product.offers.price

  return { message: 'Produto encontrado com sucesso', data: { name, barcode, brand, image, price } }
};

export { getProductService };
