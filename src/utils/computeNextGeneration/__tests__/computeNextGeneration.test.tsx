import { computeNextGeneration } from '..'
import { CellValuesState } from '../../../App'

describe('computeNextGeneration', () => {
  const cellValues: CellValuesState = {
    liveCells: [
      [1, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
    ],
  }

  it('should correctly generate the first generation', () => {
    const firstGeneration: CellValuesState = {
      liveCells: [
        [2, 1],
        [2, 3],
        [3, 2],
        [3, 3],
        [4, 2],
      ],
    }
    expect(computeNextGeneration(cellValues)).toEqual(firstGeneration)
  })
})
