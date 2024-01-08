export interface ProductBarcodeProps {
  barcode?: string
}

const ProductBarcode = (props: ProductBarcodeProps) => {
  const { barcode } = props
  return (
    <a
      href="#"
      className="block p-6 bg-white border border-gray-800 rounded-lg shadow col-span-3 col-start-4"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">
        {barcode}
      </h5>
    </a>
  )
}

export { ProductBarcode }
