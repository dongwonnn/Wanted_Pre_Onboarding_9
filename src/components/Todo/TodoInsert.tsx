import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { DATE_FORM, INPUT_ERROR_MESSAGE } from "utils/constants";
import { ErrorMessage } from "utils/styles/Message";
import { createTodoRequest } from "store/actions/todo";
import styled from "styled-components";

const TodoInsert = () => {
  const dispatch = useDispatch();
  const [inputError, setInputError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  // input값 저장하는 함수입니다.
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setInputError(false);
  }, []);

  // Todo 생성하는 버튼입니다.
  // 입력값 빈칸일 때 예외 경고 메세지를 출력합니다.
  // dispatch를 이용해 todo를 생성합니다. ( id는 자동 생성 )
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!value) {
        setInputError(true);

        return;
      }

      dispatch(
        createTodoRequest({
          content: value,
          isCheck: false,
          createAt: new Date().toLocaleDateString("kr-KR", DATE_FORM),
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

export default TodoInsert;
