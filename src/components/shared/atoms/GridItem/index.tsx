import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import '../../../../styles/globals.css'

interface GridItemProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  isAlive?: boolean
  location: number[]
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
`
export const GridItem: React.FC<GridItemProps> = ({
  children,
  isAlive,
  location,
  ...elementAttributes
}) => {
  return (
    <GridItemComponent
      className={isAlive ? 'alive' : ''}
      {...elementAttributes}
    >
      {children}
    </GridItemComponent>
  )
}
