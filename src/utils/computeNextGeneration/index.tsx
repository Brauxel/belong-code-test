import { cellRange } from '../../components/shared/elements/CellSimulator'
import { cloneDeep } from 'lodash'

export const computeNextGeneration = (cellValues: cellRange[][]) => {
  const newCellValues = cloneDeep(cellValues)
  const queue = extractValueLocationsFromCellArray(1, cellValues)
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

  while (queue.length > 0) {
    let currentSize = queue.length

    while (currentSize > 0) {
      const currentElement: number[] | undefined = queue.shift()

      if (currentElement) {
        let currentAliveNeighbors = 0
        for (const d of directions) {
          const { row, col } = computeRowColInCircularArray(
            currentElement[0] + d[0],
            currentElement[1] + d[1],
            cellValues
          )

          if (cellValues[row][col] === 1) {
            currentAliveNeighbors += 1
          } else if (cellValues[currentElement[0]][currentElement[1]] === 1) {
            queue.push([row, col])
          }
        }

        if (cellValues[currentElement[0]][currentElement[1]] === 1) {
          if (currentAliveNeighbors === 2 || currentAliveNeighbors === 3) {
            continue
          } else {
            newCellValues[currentElement[0]][currentElement[1]] = 0
          }
        } else {
          if (currentAliveNeighbors === 3) {
            newCellValues[currentElement[0]][currentElement[1]] = 1
          }
        }
      }

      currentSize--
    }
  }

  return newCellValues
}

export const extractValueLocationsFromCellArray = (
  value: cellRange,
  cellValues: cellRange[][]
) => {
  const queue = []
  for (let i = 0; i < cellValues.length; i++) {
    for (let j = 0; j < cellValues[0].length; j++) {
      if (cellValues[i][j] === value) {
        queue.push([i, j])
      }
    }
  }

  return queue
}

export const computeRowColInCircularArray = (
  row: number,
  col: number,
  cellValues: cellRange[][]
) => {
  let computedRow = row >= cellValues.length ? 0 : row
  computedRow = computedRow < 0 ? cellValues.length - 1 : computedRow

  let computedCol = col >= cellValues[0].length ? 0 : col
  computedCol = computedCol < 0 ? cellValues[0].length - 1 : computedCol

  return { row: computedRow, col: computedCol }
}
