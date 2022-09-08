import { cellRange } from '../../components/shared/elements/CellSimulator'
import { cloneDeep } from 'lodash'

export const computeNextGeneration = (cellValues: cellRange[][]) => {
  const newCellValues = cloneDeep(cellValues)
  const queue = extractValueLocationsFromCellArray(1, cellValues)

  /*
    - To check for the number of neighbors that are living cells i.e. represented by a value of 1, we make use of the breadth first algorithm
    - The directions provided below are markers in a 2d array index. 
    - The directions "add" to the current index of the element whose neighbors are being searched and in that manner we're able to traverse the array        
  */
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
            // The conditional block above are used to add the number of neighbors that are "alive" aka 1
            currentAliveNeighbors += 1
          } else if (cellValues[currentElement[0]][currentElement[1]] === 1) {
            // This conditional block is used to grab the dead cells that are next to the living cells and add them to the queue so we can calculate the living cells next to them and bring them to life
            queue.push([row, col])
          }
        }

        if (cellValues[currentElement[0]][currentElement[1]] === 1) {
          // This conditional block is used to meet the relevant requirements for retention of life by a living cell
          if (currentAliveNeighbors === 2 || currentAliveNeighbors === 3) {
            // This conditional block states that if a living cell has 2 or 3 living neighbors it gets to live on, hence the while loop continues to next iteration
            continue
          } else {
            // This conditional block states a living cell will die if the 2 or 3 condition is not met.
            // As under crowding or over crowding result in death, there is not further need to tweak this condition
            newCellValues[currentElement[0]][currentElement[1]] = 0
          }
        } else if (currentAliveNeighbors === 3) {
          // This conditional block is used to meet the relevant requirements to bring a dead cell to life
          // If a dead cell has exactly 3 living neighbors, it'll come to life
          newCellValues[currentElement[0]][currentElement[1]] = 1
        }
      }

      currentSize--
    }
  }

  return newCellValues
}

/*
    - The function below is used to extract all the locations of a particular number in 2d array of numbers
    - It returns an array of numbers with each entry representing the first and second index of the provided number
*/
export const extractValueLocationsFromCellArray = (
  value: cellRange,
  cellValues: number[][]
): number[][] => {
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

/*
    - The function below is used to compute the row and col in a "circular array" i.e. an array whose start and end loop back on each other
    - It returns "row" and "col as part of an object"
*/
export const computeRowColInCircularArray = (
  rowArg: number,
  colArg: number,
  cellValues: number[][]
) => {
  let row = rowArg >= cellValues.length ? 0 : rowArg
  row = row < 0 ? cellValues.length - 1 : row

  let col = colArg >= cellValues[0].length ? 0 : colArg
  col = col < 0 ? cellValues[0].length - 1 : col

  return { row, col }
}
