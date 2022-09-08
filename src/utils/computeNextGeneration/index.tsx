// import { CellValuesState } from '../../App'
// import { cellRange } from '../../components/shared/elements/CellSimulator'
// import { constructCellArray } from '../cellComputers'

import { cellRange } from '../../components/shared/elements/CellSimulator'

export const computeNextGeneration = (cellValues: cellRange[][]) => {
  const queue = []
  for (let i = 0; i < cellValues.length; i++) {
    for (let j = 0; j < cellValues[0].length; j++) {
      if (cellValues[i][j] === 1) {
        queue.push([i, j])
      }
    }
  }

  // BFS
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  return cellValues
}

// export const computeNextGeneration2 = (cellValues: CellValuesState) => {
//   const compiledCellArray: cellRange[][] = constructCellArray(cellValues)

//   const queue = []
//   for (let i = 0; i < compiledCellArray.length; i++) {
//     for (let j = 0; j < compiledCellArray[0].length; j++) {
//       if (compiledCellArray[i][j] === 1) {
//         queue.push([i, j])
//       }
//     }
//   }

//   // BFS
//   const directions = [
//     [-1, -1],
//     [-1, 0],
//     [-1, 1],
//     [0, -1],
//     [0, 1],
//     [1, -1],
//     [1, 0],
//     [1, 1],
//   ]

//   while (queue.length > 0) {
//     let currentSize = queue.length
//     let currentAliveNeighbors = 0

//     while (currentSize > 0) {
//       const currentElement = queue.shift()

//       if (currentElement) {
//         for (const d of directions) {
//           let row = currentElement[0] + d[0]
//           let col = currentElement[1] + d[1]

//           row = row >= compiledCellArray.length ? 0 : row
//           row = row < 0 ? compiledCellArray.length - 1 : row

//           col = col >= compiledCellArray[0].length ? 0 : col
//           col = col < 0 ? compiledCellArray[0].length - 1 : col

//           if (compiledCellArray[row][col] === 1) {
//             currentAliveNeighbors += currentAliveNeighbors
//           }
//         }

//         currentSize--
//       }
//     }
//   }

//   return cellValues
// }

// export const computeNextGeneration = (cellValues: CellValuesState) => {
//   const cellValuesCopy = { ...cellValues }
//   const newCellValues: CellValuesState = {
//     liveCells: [],
//   }
//   const compiledCellArray: cellRange[][] = constructCellArray(cellValues)

//   while (cellValuesCopy.liveCells.length > 0) {
//     const currentElement = cellValuesCopy.liveCells.shift()

//     const directions = [
//       [-1, -1],
//       [-1, 0],
//       [-1, 1],
//       [0, -1],
//       [0, 1],
//       [1, -1],
//       [1, 0],
//       [1, 1],
//     ]

//     if (currentElement) {
//       let aliveNeighborsCount = 0
//       for (const dir of directions) {
//         let row = currentElement[0] + dir[0]
//         let col = currentElement[1] + dir[1]

//         row = row >= compiledCellArray.length ? 0 : row
//         row = row < 0 ? compiledCellArray.length - 1 : row

//         col = col >= compiledCellArray[0].length ? 0 : col
//         col = col < 0 ? compiledCellArray[0].length - 1 : col

//         const locationIndex = cellValuesCopy.liveCells.findIndex(
//           (element) => element[0] === row && element[1] === col
//         )

//         if (locationIndex > 0) {
//           aliveNeighborsCount += aliveNeighborsCount
//         }
//       }

//       // if statements go here
//       if (aliveNeighborsCount === 2 || aliveNeighborsCount === 3) {
//         newCellValues.liveCells.push(currentElement)
//       }
//     }
//   }
//   return cellValues
// }
