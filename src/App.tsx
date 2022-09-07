import { useState } from 'react'
import './App.css'
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

  const [cellValues] = useState<CellValuesState>(initialState)

  const compiledCellArray: cellRange[][] = constructCellValues(cellValues)

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to my Cell simulator</p>
        <CellSimulator cells={compiledCellArray} noOfColumns={6} />
      </header>
    </div>
  )
}
