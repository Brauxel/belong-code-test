import { computeNextGeneration } from '..'
import { cellRange } from '../../../components/shared/elements/CellSimulator'

describe('computeNextGeneration', () => {
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
