import Image from 'next/image'

export interface ProductImageProps {
  url: string
}

const ProductImage = (props: ProductImageProps) => {
  const { url } = props
  return (
    <div className="flex justify-center items-center lg:h-[650px] w-full h-auto p-6 bg-white rounded-lg lg:w-1/2">
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
