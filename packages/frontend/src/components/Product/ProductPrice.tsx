export interface ProductPriceProps {
  price?: string
}

const ProductPrice = (props: ProductPriceProps) => {
  const { price } = props
  return (
    <a
      href="#"
      className="block p-6 bg-white border border-gray-800 rounded-lg shadow col-span-2 col-start-5"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
        {`R$ ${price}`}
      </h5>
    </a>
  )
}

export { ProductPrice }
