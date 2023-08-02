import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const TodoForm = ({ addNewTodo, dispatch, inputValue }) => {
  const getInputValue = (e) => {
    dispatch({ type: "INCREMENT", payload: e.target.value });
  };

  return (
    <StyledTodoForm>
      <Input onChange={getInputValue} value={inputValue?.value || ""} />
      <Button onClick={addNewTodo} title="add" />
    </StyledTodoForm>
  );
};

const StyledTodoForm = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export default TodoForm;
