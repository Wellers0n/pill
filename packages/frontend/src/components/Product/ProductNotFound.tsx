export interface ProductNotFoundProps {}

const ProductNotFound = (props: ProductNotFoundProps) => {
  return (
    <a
      href="#"
      className="block p-6 bg-white border border-gray-800 rounded-lg shadow col-span-6 col-start-1"
    >
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-gray-800">
        Nenhum produto encontrado
      </h5>
    </a>
  )
}

export { ProductNotFound }
