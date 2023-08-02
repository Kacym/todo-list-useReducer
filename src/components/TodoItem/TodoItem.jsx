import React from 'react'
import { styled } from 'styled-components'
import Button from '../UI/Button/Button'

const TodoItem = ( {deleteTodoHandler, todo} ) => {

  return (
    <StyledTodoItem>
        <p>{todo.title}</p>
        <Button onClick={() => deleteTodoHandler(todo.id)} bgColor="red" title="remove"/>
    </StyledTodoItem>
  )
}


const StyledTodoItem = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 1px 3px 2px 3px;
    list-style: none;
`

export default TodoItem