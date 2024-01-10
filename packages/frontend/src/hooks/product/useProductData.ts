import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { enqueueSnackbar } from 'notistack'
import getProduct from '@/services/product/getProduct'

type Props = {
  url: string
}

type Response = {
  message: string
  data: {
    name: string
    barcode: string
    brand: string
    image: string
    price: string
  }
}

const useProductData = (props: Props) => {
  const { url } = props

  const { data, error, isLoading } = useQuery<Response, AxiosError<Error>>(
    ['product', url],
    async () =>
      getProduct({
        url
      })
  )

  if (error) {
    enqueueSnackbar({
      message:
        error.response?.data?.message ||
        'Algo deu errado ao buscar o produto!',
      variant: 'error'
    })
  }

  return { response: data, error, isLoading }
}

export default useProductData
