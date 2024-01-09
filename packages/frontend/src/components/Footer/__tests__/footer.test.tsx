import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Footer from '@/components/Footer'
import Wrapper from '@/test/Wrapper'

const url = process.env.BASE_URL || 'http://localhost:3333'

describe('Footer', () => {
  it('should render correctly', () => {
    render(
      <Wrapper>
        <Footer />
      </Wrapper>
    )

    expect(screen.getByText('Farmácia Digital')).toBeInTheDocument()

  })
})
