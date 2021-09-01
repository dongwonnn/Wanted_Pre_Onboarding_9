import React from "react";
import { FC } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { ITodo } from "utils/types/ITodo";

interface TodoListItemProps {
  todo: ITodo;
  onRemove: (e: number) => void;
  onToggle: (e: number) => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <TodoListItemWrapper>
      <TodoCheckBox checked={checked} onClick={() => onToggle(id)}>
        {!checked ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
        <p>{text}</p>
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

const TodoCheckBox = styled.div<{ checked: boolean }>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => (props.checked ? `#22b8cf` : `none`)};
    font-size: 1.5rem;
  }

  p {
    color: ${(props) => (props.checked ? `#adb5bd` : `none`)};
    text-decoration: ${(props) => (props.checked ? `line-through` : `none`)};

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
