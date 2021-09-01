import React, { FC } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createTodoRequest } from "store/actions/todo";
import styled from "styled-components";
import { INPUT_ERROR_MESSAGE } from "utils/constants/constants";

interface TodoInsertProps {}

const TodoInsert: FC<TodoInsertProps> = () => {
  const dispatch = useDispatch();

  const [inputError, setInputError] = useState(false);
  const [value, setValue] = useState<string>("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    setInputError(false);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!value) {
        setInputError(true);

        return;
      }

      dispatch(
        createTodoRequest({
          content: value,
          isCheck: false,
          createAt: new Date(),
        })
      );
      setValue("");
    },
    [value, dispatch]
  );

  return (
    <>
      <TodoInserWrapper onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요."
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </TodoInserWrapper>
      {inputError && <ErrorMessage>{INPUT_ERROR_MESSAGE}</ErrorMessage>}
    </>
  );
};

const TodoInserWrapper = styled.form`
  display: flex;
  background: #495057;

  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }
    flex: 1;
  }

  button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  padding: 5px;
  border-bottom: 1px solid #dee2e6;
`;

export default TodoInsert;
