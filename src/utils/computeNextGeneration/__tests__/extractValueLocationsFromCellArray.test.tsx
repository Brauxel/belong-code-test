import { extractValueLocationsFromCellArray } from '..'
import { cellRange } from '../../../components/shared/elements/CellSimulator'

describe('extractValueLocationsFromCellArray', () => {
  it('should return an empty array if the value does not exist', () => {
    const cellValues: cellRange[][] = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]

    expect(extractValueLocationsFromCellArray(1, cellValues)).toHaveLength(0)
  })

  it('should return an the [i, j] location of 1', () => {
    const cellValues: cellRange[][] = [
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ]

    expect(extractValueLocationsFromCellArray(1, cellValues)).toStrictEqual([
      [0, 1],
      [1, 2],
      [3, 3],
    ])
  })

  it('should return an the [i, j] location of 0', () => {
    const cellValues: cellRange[][] = [
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 0],
    ]

    expect(extractValueLocationsFromCellArray(0, cellValues)).toStrictEqual([
      [0, 1],
      [1, 2],
      [3, 3],
    ])
  })
})
