import { useState } from 'react'
import './App.css'
import { Button } from './components/shared/atoms/Button'
import {
  cellRange,
  CellSimulator,
} from './components/shared/elements/CellSimulator'

export interface CellValuesState {
  liveCells: number[][]
}

export const constructCellValues = (
  cellValues: CellValuesState
): cellRange[][] => {
  const initialCellValues: cellRange[][] = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]

  for (const val of cellValues.liveCells) {
    initialCellValues[val[0]][val[1]] = 1
  }

  return initialCellValues
}

export const App = () => {
  const initialState: CellValuesState = {
    liveCells: [],
  }

  const [cellValues, setCellValues] = useState<CellValuesState>(initialState)

  const compiledCellArray: cellRange[][] = constructCellValues(cellValues)

  const toggleGridLife = (location: number[]) => {
    const cellValuesCopy = { ...cellValues }
    const locationIndex = cellValuesCopy.liveCells.findIndex(
      (element) => element[0] === location[0] && element[1] === location[1]
    )
    if (locationIndex < 0) {
      cellValuesCopy.liveCells.push(location)
    } else {
      cellValuesCopy.liveCells.splice(locationIndex, 1)
    }
    setCellValues({ ...cellValuesCopy })
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>Welcome to my Cell simulator</p>
        <CellSimulator
          cells={compiledCellArray}
          noOfColumns={6}
          toggleGridValue={toggleGridLife}
        />

        <Button
          type="button"
          onClick={() => setCellValues({ ...initialState })}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
