export interface ProductLayoutProps {
  children: React.ReactNode
}

const ProductLayout = (props: ProductLayoutProps) => {
  const { children } = props
  return <div className="container mx-auto flex justify-center items-start mt-20 gap-3">{children}</div>
}

export { ProductLayout }
