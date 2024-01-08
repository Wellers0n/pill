import Image from 'next/image'

export interface ProductImageProps {
  url: string
}

const ProductImage = (props: ProductImageProps) => {
  const { url } = props
  return (
    <div className="flex justify-center items-center h-[575px] p-6 bg-white rounded-lg w-1/2">
      <Image
        src={url}
        width={450}
        height={450}
        alt="Product img"
        objectFit="cover"
      />
    </div>
  )
}

export { ProductImage }
