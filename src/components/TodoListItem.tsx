import React, { useCallback } from "react";
import { FC } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodoRequest } from "store/reducers/todo";
import styled from "styled-components";
import { ITodo } from "utils/types/ITodo";

interface TodoListItemProps {
  todo: ITodo;
  onToggle: (e: number) => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, onToggle }) => {
  const dispatch = useDispatch();
  const { id, content, isCheck } = todo;

  const onRemove = useCallback(
    (id) => {
      dispatch(deleteTodoRequest(id));
    },
    [dispatch]
  );

  return (
    <TodoListItemWrapper>
      <TodoCheckBox isCheck={isCheck} onClick={() => onToggle(id)}>
        {!isCheck ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
        <p>{content}</p>
      </TodoCheckBox>
      <TodoRemove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
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
