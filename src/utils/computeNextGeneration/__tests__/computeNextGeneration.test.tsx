import { computeNextGeneration } from '..'
// import { CellValuesState } from '../../../App'
import { cellRange } from '../../../components/shared/elements/CellSimulator'

// describe('computeNextGeneration', () => {
//   const cellValues: CellValuesState = {
//     liveCells: [
//       [1, 2],
//       [2, 3],
//       [3, 1],
//       [3, 2],
//       [3, 3],
//     ],
//   }

//   const firstGeneration: CellValuesState = {
//     liveCells: [
//       [2, 1],
//       [2, 3],
//       [3, 2],
//       [3, 3],
//       [4, 2],
//     ],
//   }

//   const secondGeneration: CellValuesState = {
//     liveCells: [
//       [2, 3],
//       [3, 1],
//       [3, 3],
//       [4, 2],
//       [4, 3],
//     ],
//   }

//   const thirdGeneration: CellValuesState = {
//     liveCells: [
//       [2, 2],
//       [3, 3],
//       [3, 4],
//       [4, 2],
//       [4, 3],
//     ],
//   }

//   const fourthGeneration: CellValuesState = {
//     liveCells: [
//       [2, 3],
//       [3, 4],
//       [4, 2],
//       [4, 3],
//       [4, 4],
//     ],
//   }

//   it('should correctly generate the first generation', () => {
//     expect(computeNextGeneration(cellValues)).toEqual(firstGeneration)
//   })

//   it('should correctly generate the second generation', () => {
//     expect(computeNextGeneration(firstGeneration)).toEqual(secondGeneration)
//   })

//   it('should correctly generate the third generation', () => {
//     expect(computeNextGeneration(secondGeneration)).toEqual(thirdGeneration)
//   })

//   it('should correctly generate the fourth generation', () => {
//     expect(computeNextGeneration(thirdGeneration)).toEqual(fourthGeneration)
//   })
// })

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
