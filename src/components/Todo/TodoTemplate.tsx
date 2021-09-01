import React, { FC } from "react";
import styled from "styled-components";

const TodoTemplate: FC = ({ children }) => {
  return (
    <TodoTemplateWrapper>
      <TodoTitle>일정 관리</TodoTitle>
      <TodoContent>{children}</TodoContent>
    </TodoTemplateWrapper>
  );
};

const TodoTemplateWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 4px;
`;

const TodoTitle = styled.div`
  background-color: #22b8cf;
  color: white;
  padding: 1.5rem 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoContent = styled.div`
  background: white;
`;

export default TodoTemplate;
