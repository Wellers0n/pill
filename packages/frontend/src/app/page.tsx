'use client'

import Header from '@/components/Header'
import Loading from '@/components/Loading'
import Footer from '@/components/Footer'
import {
  ProductLayout,
  ProductImage,
  ProductInfo,
  ProductBarcode,
  ProductPrice,
  ProductNotFound
} from '@/components/Product'
import useProductData from '@/hooks/product/useProductData'

export default function Home() {
  const URL = 'https://www.drogasil.com.br/neosaldina-30-drageas.html'

  const { response, isLoading } = useProductData({ url: URL })

  return (
    <main>
      <Header />
      {isLoading ? (
        <div className="flex w-screen items-center justify-center">
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
          />
          <ProductBarcode barcode={response?.data.barcode} />
          <ProductPrice price={response?.data.price} />
        </ProductLayout>
      )}

      <Footer />
    </main>
  )
}
