import React, { useReducer, useState } from "react";
import { styled } from "styled-components";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

const initialState = {
  value: "",
};

const reducerFunc = (prevState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "INCREMENT": {
      return {
        value: action.payload,
      };
    }
    case "RESET_INPUT_VALUE": {
      return {
        value: "",
      };
    }
    default: {
      return prevState;
    }
  }
};

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, dispatch] = useReducer(reducerFunc, initialState);

  const addNewTodo = (e) => {
    const newTodo = {
      title: inputValue.value,
      id: Math.floor(Math.random() * 100000),
    };

    setTodos([...todos, newTodo]);
    e.preventDefault();
    dispatch({ type: "RESET_INPUT_VALUE" });
  };

  const deleteTodoHandler = (id) => {
    const filteredArray = todos.filter((item) => item.id !== id);
    setTodos(filteredArray);
  };
  return (
    <StyledTodoContainer>
      <TodoForm
        addNewTodo={addNewTodo}
        dispatch={dispatch}
        inputValue={inputValue}
      />
      <TodoListArea>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              deleteTodoHandler={deleteTodoHandler}
              key={todo.id}
              todo={todo}
            />
          ))
        ) : (
          <h1>There is no todo</h1>
        )}
      </TodoListArea>
    </StyledTodoContainer>
  );
};

const StyledTodoContainer = styled.div`
  background-color: white;
  border-radius: 9px;
  width: 40%;
  margin: 40px auto 0;
  padding: 40px;
`;

const TodoListArea = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export default TodoContainer;
