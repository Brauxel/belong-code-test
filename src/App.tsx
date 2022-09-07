import { useState } from 'react'
import './App.css'
import { Button } from './components/shared/atoms/Button'
import {
  cellRange,
  CellSimulator,
} from './components/shared/elements/CellSimulator'
import { constructCellArray } from './utils/cellComputers'
import { computeNextGeneration } from './utils/computeNextGeneration'

export interface CellValuesState {
  liveCells: number[][]
}

export const App = () => {
  const initialState: CellValuesState = {
    liveCells: [],
  }

  const [cellValues, setCellValues] = useState<CellValuesState>(initialState)

  const compiledCellArray: cellRange[][] = constructCellArray(cellValues)

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

  const generateNextGeneration = () => {
    setCellValues({ ...computeNextGeneration(cellValues) })
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

        <Button type="button" onClick={generateNextGeneration}>
          Next Generation
        </Button>
      </div>
    </div>
  )
}
