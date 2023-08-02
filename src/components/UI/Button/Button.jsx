import React from 'react'
import { styled } from 'styled-components'

const Button = (props) => {
  return (
    <StyledButton bgColor={props.bgColor} onClick={props.onClick}>{props.title}</StyledButton>
  )
}

const StyledButton = styled.button`
    height: 40px;
    width: 100px;

    border-radius: 4px;
    border: none;

    color: white;
    background-color: ${(props) => props.bgColor || "lightblue"};

    cursor: pointer;
`

export default Button