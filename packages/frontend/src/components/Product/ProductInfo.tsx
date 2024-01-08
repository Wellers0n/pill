export interface ProductInfoProps {
  name?: string
  description?: string
}

const ProductInfo = (props: ProductInfoProps) => {
  const { name, description } = props
  return (
    <a
      href="#"
      className="block p-6 bg-white border border-gray-800 rounded-lg shadow col-span-3 col-start-4 row-span-3"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-500">
        {description}
      </p>
    </a>
  )
}

export { ProductInfo }
