import React from 'react'
import { styled } from 'styled-components'

const Input = (props) => {
  return (
    <StyledInput onChange={props.onChange} {...props} />
  )
}

const StyledInput = styled.input`
    width: 200px;
    height: 40px;
`
export default Input