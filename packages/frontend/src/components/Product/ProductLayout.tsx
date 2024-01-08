export interface ProductLayoutProps {
  children: React.ReactNode
}

const ProductLayout = (props: ProductLayoutProps) => {
  const { children } = props
  return <div className="grid grid-cols-6 gap-4 mt-10 p-10">{children}</div>
}

export { ProductLayout }
