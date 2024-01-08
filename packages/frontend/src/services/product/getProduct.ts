import Api from '../api'

type Props = {
  url: string
}

type Response = {
  message: string,
  data: {
    name: string
    barcode: string
    brand: string
    image: string
    price: string
  }
}

const getProduct = async (props: Props): Promise<Response> => {
  const { url } = props

  const api = Api()

  const response = await api.get<Response>(`product`, {
    params: { url }
  })

  return response.data
}

export default getProduct
