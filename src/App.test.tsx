import { fireEvent, render, waitFor } from '@testing-library/react'
import { App } from './App'

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
