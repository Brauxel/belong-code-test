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

  describe('Reset Button', () => {
    it('should reset the cell values on click', async () => {
      const { getByTestId, getAllByTestId } = render(<App />)
      fireEvent.click(getAllByTestId('grid-item-test-id')[1])
      await waitFor(() =>
        expect(document.getElementsByClassName('alive')).toHaveLength(1)
      )

      fireEvent.click(getByTestId('reset-button'))
      await waitFor(() =>
        expect(document.getElementsByClassName('alive')).toHaveLength(0)
      )
    })
  })

  describe('Next Generation Button', () => {
    it('should trigger a generational shift', async () => {
      const { getByTestId, getAllByTestId } = render(<App />)
      fireEvent.click(getAllByTestId('grid-item-test-id')[1])
      await waitFor(() =>
        expect(document.getElementsByClassName('alive')).toHaveLength(1)
      )

      fireEvent.click(getByTestId('next-generation-button'))
      await waitFor(() =>
        expect(document.getElementsByClassName('alive')).toHaveLength(0)
      )
    })
  })
})
