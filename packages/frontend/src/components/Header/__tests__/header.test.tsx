import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Header from '@/components/Header'
import Wrapper from '@/test/Wrapper'

const url = process.env.BASE_URL || 'http://localhost:3333'

describe('Header', () => {
  it('should render correctly', () => {
    render(
      <Wrapper>
        <Header />
      </Wrapper>
    )

    expect(screen.getByText('Farmácia Digital')).toBeInTheDocument()

  })
})
