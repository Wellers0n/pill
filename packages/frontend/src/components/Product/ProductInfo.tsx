export interface ProductInfoProps {
  name: string
  description: string
  barcode: string
  price: string
}

const ProductInfo = (props: ProductInfoProps) => {
  const { name, description, barcode, price } = props
  return (
    <div className="rounded-lg lg:h-[650px] h-auto w-full lg:w-1/3 bg-white flex flex-col">
      <div className="block p-4">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-600 dark:text-gray-500">
          {name}
        </h5>
        <h3 className="font-bold text-2xl text-gray-800 dark:text-gray-700">
          {description}
        </h3>
        <img src={'/stars.png'} alt="Stars" height={120} width={120} />
      </div>
      <div className="block p-4">
        <h1 className="text-3xl font-bold tracking-tight text-blue-900 ">
          {`R$ ${price}`}
        </h1>
      </div>
      <div className="block p-4">
        <button className="rounded-full bg-blue-900 w-full py-4 text-white">
          Comprar agora
        </button>
      </div>
      <div className="block p-4">
        <div className="border border-gray-400 p-6 rounded-md">
          <h4 className="mb-2 text-md font-bold tracking-tight text-gray-600">
            Informações de entrega
          </h4>
          <div>
            <h6 className="text-sm font-normal tracking-tight text-gray-400">calcular frente</h6>
            <div className="flex gap-3">
            <input type="text" className="border w-full border-gray-400 p-2 rounded-md text-blue-900" />
            <button className="rounded-md bg-blue-900 h-10 w-32 text-white">calcular</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 h-full flex items-end">
        <p className="text-sm font-bold tracking-tight text-gray-400">
          cód: {barcode}
        </p>
      </div>
    </div>
  )
}

export { ProductInfo }
