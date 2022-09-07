import { CellValuesState } from '../../App'
import { cellRange } from '../../components/shared/elements/CellSimulator'

export const constructCellArray = (
  cellValues: CellValuesState
): cellRange[][] => {
  const initialCellArray: cellRange[][] = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]

  for (const val of cellValues.liveCells) {
    initialCellArray[val[0]][val[1]] = 1
  }

  return initialCellArray
}
