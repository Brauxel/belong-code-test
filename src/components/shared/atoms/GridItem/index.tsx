import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { toggleGridValueType } from '../../elements/CellSimulator'

interface GridItemProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  isAlive?: boolean
  location: number[]
  toggleGridValue?: toggleGridValueType
}

const GridItemComponent = styled.a`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 30px;
  font-size: 30px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &.alive {
    background-color: green !important;
  }
`
export const GridItem: React.FC<GridItemProps> = ({
  children,
  isAlive,
  location,
  toggleGridValue,
  ...elementAttributes
}) => {
  const clickHandler = () => {
    if (toggleGridValue) toggleGridValue(location)
  }

  return (
    <GridItemComponent
      className={isAlive ? 'alive' : ''}
      onClick={clickHandler}
      data-testid="grid-item-test-id"
      {...elementAttributes}
    >
      {children}
    </GridItemComponent>
  )
}
