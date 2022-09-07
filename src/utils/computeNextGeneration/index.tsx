import { CellValuesState } from '../../App'
import { cellRange } from '../../components/shared/elements/CellSimulator'
import { constructCellArray } from '../cellComputers'

export const computeNextGeneration = (cellValues: CellValuesState) => {
  const compiledCellArray: cellRange[][] = constructCellArray(cellValues)

  const queue = []
  for (let i = 0; i < compiledCellArray.length; i++) {
    for (let j = 0; j < compiledCellArray[0].length; j++) {
      if (compiledCellArray[i][j] === 1) {
        queue.push([i, j])
      }
    }
  }

  return cellValues
}
