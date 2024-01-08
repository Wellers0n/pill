export interface ProductImageProps {
  url?: string
}

const ProductImage = (props: ProductImageProps) => {
  const { url } = props
  return (
    <a
      href="#"
      className=" p-6 flex justify-center col-start-1 col-span-3 row-span-6 grid-flow-col"
    >
      <img src={url} alt="Product img" />
    </a>
  )
}

export { ProductImage }
