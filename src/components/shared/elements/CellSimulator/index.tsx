import React from 'react'
import { GridItem } from '../../atoms/GridItem'
import { Grid } from '../../molecules/Grid'

export type cellRange = 0 | 1
export type toggleGridValueType = (location: number[]) => void
interface CellSimulatorProps {
  cells: cellRange[][]
  noOfColumns?: number
  toggleGridValue?: toggleGridValueType
}

export const CellSimulator: React.FC<CellSimulatorProps> = ({
  cells,
  noOfColumns = 3,
  ...elementAttributes
}) => {
  return (
    <Grid noOfColumns={noOfColumns}>
      {cells.map((cell, outerIndex) =>
        cell.map((cellValue, innerIndex) => (
          <GridItem
            key={`${outerIndex}${innerIndex}`}
            location={[outerIndex, innerIndex]}
            isAlive={cellValue === 1}
            {...elementAttributes}
          >
            &nbsp;
          </GridItem>
        ))
      )}
    </Grid>
  )
}
