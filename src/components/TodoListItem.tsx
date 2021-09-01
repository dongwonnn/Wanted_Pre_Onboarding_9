import React, { useCallback } from "react";
import { FC } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoRequest, updateTodoRequest } from "store/actions/todo";
import { RootState } from "store/reducers";
import styled from "styled-components";
import { UPDATE_ERROR_MESSAGE, REMOVE_ERROE_MESSAGE } from "utils/constants";
import { CenterErrorMessage } from "utils/styles/Message";
import { ITodo } from "utils/types/ITodo";
import Spinner from "./Common/Spinner";

interface TodoListItemProps {
  todo: ITodo;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  const { id, content, isCheck, createAt } = todo;
  const dispatch = useDispatch();
  const { updateLoading, updateError, deleteLoading, deleteError } =
    useSelector((state: RootState) => state.todo);

  const onRemove = useCallback(
    (id) => {
      dispatch(deleteTodoRequest(id));
    },
    [dispatch]
  );

  const onToggle = useCallback(
    (id) => {
      dispatch(
        updateTodoRequest({
          id,
          isCheck: !isCheck,
        })
      );
    },
    [dispatch, isCheck]
  );

  return (
    <TodoListItemWrapper>
      <TodoCheckBox isCheck={isCheck} onClick={() => onToggle(id)}>
        {updateLoading ? (
          <Spinner />
        ) : !isCheck ? (
          <MdCheckBoxOutlineBlank />
        ) : (
          <MdCheckBox />
        )}
        {updateError && (
          <CenterErrorMessage>{UPDATE_ERROR_MESSAGE}</CenterErrorMessage>
        )}
        <p>{content}</p>
        <p>{createAt}</p>
      </TodoCheckBox>
      <TodoRemove onClick={() => onRemove(id)}>
        {deleteLoading ? <Spinner /> : <MdRemoveCircleOutline />}
        {deleteError && (
          <CenterErrorMessage>{REMOVE_ERROE_MESSAGE}</CenterErrorMessage>
        )}
      </TodoRemove>
    </TodoListItemWrapper>
  );
};

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #f8f9fa;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoCheckBox = styled.div<{ isCheck: boolean }>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => (props.isCheck ? `#22b8cf` : `none`)};
    font-size: 1.5rem;
  }

  p {
    color: ${(props) => (props.isCheck ? `#adb5bd` : `none`)};
    text-decoration: ${(props) => (props.isCheck ? `line-through` : `none`)};

    margin-left: 0.5rem;
    flex: 1;
  }

  // 체크 되었을 때 할 스타일
`;

const TodoRemove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1, 5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

export default TodoListItem;
