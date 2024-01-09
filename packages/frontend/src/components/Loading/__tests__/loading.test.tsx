import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Loading from '@/components/Loading'
import Wrapper from '@/test/Wrapper'

const url = process.env.BASE_URL || 'http://localhost:3333'

describe('Loading', () => {
  it('should render correctly', () => {
    render(
      <Wrapper>
        <Loading />
      </Wrapper>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()

  })
})
