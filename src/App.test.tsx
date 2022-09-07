import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { App } from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Welcome to my Cell simulator/i)
  expect(linkElement).toBeInTheDocument()
})

describe('App', () => {
  describe('CellSimulator', () => {
    it('should toggle the cells between alive and dead and clicked', async () => {
      const { getAllByTestId } = render(<App />)
      fireEvent.click(getAllByTestId('grid-item-test-id')[1])
      await waitFor(() =>
        expect(document.getElementsByClassName('alive')).toHaveLength(1)
      )

      fireEvent.click(getAllByTestId('grid-item-test-id')[1])
      await waitFor(() =>
        expect(document.getElementsByClassName('alive')).toHaveLength(0)
      )
    })
  })
})
