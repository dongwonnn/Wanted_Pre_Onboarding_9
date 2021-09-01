import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";

const TodoListItem = () => {
  return (
    <TodoListItemWrapper>
      <TodoCheckBox>
        <MdCheckBoxOutlineBlank />
        <p>할 일</p>
      </TodoCheckBox>
      <TodoRemove>
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

const TodoCheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }

  p {
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
