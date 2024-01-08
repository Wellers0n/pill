export interface ProductLayoutProps {
  children: React.ReactNode
}

const ProductLayout = (props: ProductLayoutProps) => {
  const { children } = props
  return <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start my-10 p-2 gap-3">{children}</div>
}

export { ProductLayout }
