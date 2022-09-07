import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: string
}

const ButtonComponent = styled.button`
  background-color: blue;
  border: 0px;
  padding: 20px 20px;
  color: white;
  text-transform: uppercase;
  display: block;
  width: 200px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 10px;

  &: hover {
    background-color: black;
  }
`

export const Button: React.FC<ButtonProps> = ({
  children,
  ...elementAttributes
}) => <ButtonComponent {...elementAttributes}>{children}</ButtonComponent>
