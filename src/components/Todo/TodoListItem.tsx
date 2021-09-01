import React, { useCallback, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { deleteTodoRequest, completeTodoRequest } from "store/actions/todo";
import { RootState } from "store/reducers";
import { COMPLETE_ERROR_MESSAGE, REMOVE_ERROE_MESSAGE } from "utils/constants";
import { CenterErrorMessage } from "utils/styles/Message";
import { ITodo } from "utils/types/ITodo";
import Spinner from "components/Common/Spinner";
import styled from "styled-components";

interface TodoListItemProps {
  todo: ITodo;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  const { id, content, isCheck, createAt } = todo;
  const dispatch = useDispatch();
  const { completeLoading, completeError, deleteLoading, deleteError } =
    useSelector((state: RootState) => state.todo);

  const onRemove = useCallback(
    (id) => {
      dispatch(deleteTodoRequest(id));
    },
    [dispatch]
  );

  const onToggleComplete = useCallback(
    (id) => {
      dispatch(
        completeTodoRequest({
          id,
          isCheck: !isCheck,
        })
      );
    },
    [dispatch, isCheck]
  );

  return (
    <TodoListItemWrapper>
      <TodoCheckBox isCheck={isCheck} onClick={() => onToggleComplete(id)}>
        {completeLoading ? (
          <Spinner />
        ) : !isCheck ? (
          <MdCheckBoxOutlineBlank />
        ) : (
          <MdCheckBox />
        )}
        {completeError && (
          <CenterErrorMessage>{COMPLETE_ERROR_MESSAGE}</CenterErrorMessage>
        )}
      </TodoCheckBox>
      <TodoItem isCheck={isCheck}>
        <p>{content}</p>
        <TodoCreateAt>{createAt}</TodoCreateAt>
      </TodoItem>
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
  justify-content: space-between;
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
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => (props.isCheck ? `#22b8cf` : `none`)};
    font-size: 1.5rem;
  }
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

const TodoItem = styled.div<{ isCheck: boolean }>`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  p {
    color: ${(props) => (props.isCheck ? `#adb5bd` : `none`)};
    text-decoration: ${(props) => (props.isCheck ? `line-through` : `none`)};

    margin-left: 0.5rem;
  }
`;

const TodoCreateAt = styled.p`
  min-width: 180px;
`;

export default TodoListItem;
