'use client'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import Footer from '@/components/Footer'
import {
  ProductLayout,
  ProductImage,
  ProductInfo,
  ProductNotFound
} from '@/components/Product'
import useProductData from '@/hooks/product/useProductData'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const url = searchParams.get('url') as string

  const { response, isLoading } = useProductData({ url })

  const urlRegex =
    /^(https?:\/\/)?(www\.)?([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?(\?[^\s]*)?$/

  const matches = url?.match(urlRegex)

  return (
    <main>
      <Header />
      {matches && isLoading ? (
        <div className="flex w-full items-center justify-center h-28">
          <Loading />
        </div>
      ) : !response?.data ? (
        <ProductLayout>
          <ProductNotFound />
        </ProductLayout>
      ) : (
        <ProductLayout>
          <ProductImage url={response?.data.image} />
          <ProductInfo
            name={response?.data.brand}
            description={response?.data.name}
            barcode={response?.data.barcode}
            price={response?.data.price}
          />
        </ProductLayout>
      )}

      {isLoading ? null : <Footer />}
    </main>
  )
}
