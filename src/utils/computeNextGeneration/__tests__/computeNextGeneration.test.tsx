import { computeNextGeneration } from '..'
import { cellRange } from '../../../components/shared/elements/CellSimulator'

describe('computeNextGeneration', () => {
  describe('test provided scenarios', () => {
    const initialCellValues: cellRange[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]

    const firstGeneration: cellRange[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]

    const secondGeneration: cellRange[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]

    const thirdGeneration: cellRange[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]

    const fourthGeneration: cellRange[][] = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0],
    ]

    it('should correctly generate the first generation', () => {
      expect(computeNextGeneration(initialCellValues)).toEqual(firstGeneration)
    })

    it('should correctly generate the second generation', () => {
      expect(computeNextGeneration(firstGeneration)).toEqual(secondGeneration)
    })

    it('should correctly generate the third generation', () => {
      expect(computeNextGeneration(secondGeneration)).toEqual(thirdGeneration)
    })

    it('should correctly generate the fourth generation', () => {
      expect(computeNextGeneration(thirdGeneration)).toEqual(fourthGeneration)
    })
  })

  describe('test provided conditions', () => {
    it('a cell with fewer than two live neighbors dies of under-population. ', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0],
      ]

      const expectedResult: cellRange[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]

      expect(computeNextGeneration(cellValues)).toEqual(expectedResult)
    })

    it('a cell with 2 or 3 live neighbors lives on to the next generation.', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]

      const expectedResult: cellRange[][] = [
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]
      expect(computeNextGeneration(cellValues)).toEqual(expectedResult)
    })

    it('a cell with more than 3 live neighbors dies of overcrowding.', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]

      const expectedResult: cellRange[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]
      expect(computeNextGeneration(cellValues)).toEqual(expectedResult)
    })

    it('an empty cell with exactly 3 live neighbors "comes to life".', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ]

      const expectedResult: cellRange[][] = [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ]

      expect(computeNextGeneration(cellValues)).toEqual(expectedResult)
    })
  })

  describe('test cell wrapping', () => {
    it('should compare rows at the left and right ends of the board', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]

      const expectedResult: cellRange[][] = [
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]

      expect(computeNextGeneration(cellValues)).toEqual(expectedResult)
    })

    it('should compare cols at the top and bottom ends of the board', () => {
      const cellValues: cellRange[][] = [
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1],
      ]

      const expectedResult: cellRange[][] = [
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1],
      ]

      expect(computeNextGeneration(cellValues)).toEqual(expectedResult)
    })
  })
})
