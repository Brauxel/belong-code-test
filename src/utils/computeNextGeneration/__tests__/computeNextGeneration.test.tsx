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

  const firstGeneration: CellValuesState = {
    liveCells: [
      [2, 1],
      [2, 3],
      [3, 2],
      [3, 3],
      [4, 2],
    ],
  }

  const secondGeneration: CellValuesState = {
    liveCells: [
      [2, 3],
      [3, 1],
      [3, 3],
      [4, 2],
      [4, 3],
    ],
  }

  it('should correctly generate the first generation', () => {
    expect(computeNextGeneration(cellValues)).toEqual(firstGeneration)
  })

  it('should correctly generate the second generation', () => {
    expect(computeNextGeneration(firstGeneration)).toEqual(secondGeneration)
  })
})
