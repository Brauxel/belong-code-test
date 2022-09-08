import { cloneDeep } from 'lodash'
import { useState } from 'react'
import { AppComponent, AppHeaderComponent } from './App.styles'
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
    <AppComponent>
      <AppHeaderComponent>
        <h1>Welcome to my cell simulator</h1>
        <p>
          To see the planning around this project, please click{' '}
          <a
            target="_blank"
            href="https://trello.com/b/JSZal3le/belong-code-test"
            rel="noreferrer"
          >
            here
          </a>
        </p>
        <p>
          To see the repository, please click{' '}
          <a
            target="_blank"
            href="https://github.com/Brauxel/belong-code-test"
            rel="noreferrer"
          >
            here
          </a>
        </p>
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
      </AppHeaderComponent>
    </AppComponent>
  )
}
