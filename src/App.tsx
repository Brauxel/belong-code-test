import { cloneDeep } from 'lodash'
import { useState } from 'react'
import './App.css'
import { Button } from './components/shared/atoms/Button'
import {
  cellRange,
  CellSimulator,
} from './components/shared/elements/CellSimulator'
import { computeNextGeneration } from './utils/computeNextGeneration'

export const App = () => {
  const initialState: cellRange[][] = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]

  const [cellValues, setCellValues] = useState<cellRange[][]>(initialState)

  const toggleGridLife = (location: number[]) => {
    const cellValueCopy = cloneDeep(cellValues)

    cellValueCopy[location[0]][location[1]] =
      cellValueCopy[location[0]][location[1]] === 1 ? 0 : 1

    setCellValues([...cellValueCopy])
  }

  const generateNextGeneration = () => {
    setCellValues([...computeNextGeneration(cellValues)])
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>Welcome to my Cell simulator</p>
        <CellSimulator
          cells={cellValues}
          noOfColumns={6}
          toggleGridValue={toggleGridLife}
        />

        <Button type="button" onClick={() => setCellValues([...initialState])}>
          Reset
        </Button>

        <Button type="button" onClick={generateNextGeneration}>
          Next Generation
        </Button>
      </div>
    </div>
  )
}
