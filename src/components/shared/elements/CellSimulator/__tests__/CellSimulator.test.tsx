import { render } from '@testing-library/react'
import reactRenderer from 'react-test-renderer'
import { cellRange, CellSimulator } from '..'

describe('CellSimulator', () => {
  describe('render with props', () => {
    it('should render alive cells for all 1s in the 2d array', () => {
      const cellValues: cellRange[][] = [
        [0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
      ]

      render(<CellSimulator cells={cellValues} noOfColumns={6} />)

      expect(document.getElementsByClassName('alive')).toHaveLength(5)
    })

    it('should not render any alive cells if no 1s are present in the 2d array', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]

      render(<CellSimulator cells={cellValues} noOfColumns={6} />)
      expect(document.getElementsByClassName('alive')).toHaveLength(0)
    })

    it('should render the grid by the number of columns provided', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ]

      const { getAllByTestId } = render(
        <CellSimulator cells={cellValues} noOfColumns={8} />
      )

      expect(getAllByTestId('grid-item-test-id')).toHaveLength(64)
    })
  })

  describe('should match the snapshot', () => {
    it('when the default props with a mix of dead and live cells are provided', () => {
      const cellValues: cellRange[][] = [
        [0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
      ]

      const tableComponent = reactRenderer.create(
        <CellSimulator cells={cellValues} noOfColumns={6} />
      )

      expect(tableComponent.toJSON()).toMatchSnapshot()
    })
  })
})
