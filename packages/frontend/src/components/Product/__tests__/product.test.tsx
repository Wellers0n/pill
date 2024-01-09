import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ProductImage, ProductInfo, ProductLayout } from '@/components/Product'
import Wrapper from '@/test/Wrapper'

const url = process.env.BASE_URL || 'http://localhost:3333'

describe('Footer', () => {
  it('should render correctly', () => {
    const data = {
      name: 'Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas',
      barcode: '7896094999992',
      brand: 'Neosaldina',
      image:
        'https://img.drogasil.com.br/catalog/product/n/e/neosaldina-30-drageas-01.jpg?width=450&height=450&quality=85&type=resize',
      price: '32.78'
    }

    render(
      <Wrapper>
        <ProductLayout>
          <ProductImage url={data.image} />
          <ProductInfo
            name={data.brand}
            description={data.name}
            barcode={data.barcode}
            price={data.price}
          />
        </ProductLayout>
      </Wrapper>
    )

    expect(screen.getByText('Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas')).toBeInTheDocument()
    expect(screen.getByText('cód: 7896094999992')).toBeInTheDocument()
    expect(screen.getByText('Neosaldina')).toBeInTheDocument()
    expect(screen.getByText('R$ 32.78')).toBeInTheDocument()
    expect(screen.getByAltText('Product img')).toBeInTheDocument()
    
  })
})
