export interface ProductNotFoundProps {}

const ProductNotFound = (props: ProductNotFoundProps) => {
  return (
    <a
      href="#"
      className="block p-6 bg-white rounded-lg"
    >
      <h5 className="text-2xl text-center font-bold text-gray-600">
        Nenhum produto encontrado
      </h5>
    </a>
  )
}

export { ProductNotFound }
