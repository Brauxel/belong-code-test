import React, { TableHTMLAttributes } from 'react'
import styled from 'styled-components'

interface GridComponentProps {
  noOfColumns: number
}

interface GridProps
  extends TableHTMLAttributes<HTMLElement>,
    GridComponentProps {
  children: React.ReactNode
}

const GridComponent = styled.div<GridComponentProps>`
  display: grid;
  grid-template-columns: ${({ noOfColumns }) => `repeat(${noOfColumns}, auto)`};
  background-color: #2196f3;
  padding: 10px;
`

export const Grid: React.FC<GridProps> = ({
  children,
  noOfColumns,
  ...elementAttributes
}) => (
  <GridComponent
    noOfColumns={noOfColumns}
    data-testid="grid-test-id"
    {...elementAttributes}
  >
    {children}
  </GridComponent>
)
