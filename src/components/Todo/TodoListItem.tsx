import React, { useCallback, FC, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
  MdSave,
} from "react-icons/md";
import {
  deleteTodoRequest,
  completeTodoRequest,
  updateTodoRequest,
} from "store/actions/todo";
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
  const [isEdit, setIsEdit] = useState(false);
  const { id, content, isCheck, createAt } = todo;

  const [editError, setEditError] = useState(false);
  const [editValue, setEditValue] = useState(content);

  const dispatch = useDispatch();
  const { completeLoading, completeError, deleteLoading, deleteError } =
    useSelector((state: RootState) => state.todo);

  // todo 삭제하는 함수입니다. dispatch로 id를 전달해 filter 메소드로 거릅니다.
  const onRemove = useCallback(
    (id) => {
      dispatch(deleteTodoRequest(id));
    },
    [dispatch]
  );

  // todo 완료 상태 체크하는 함수입니다.
  // dispatch로 id와 isCheck를 전달해 map 메소드로 새 배열을 반환합니다.
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

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  }, []);

  const onEdit = useCallback(() => {
    setIsEdit((prev) => !prev);
  }, []);

  // todo 수정된 conent를 저장합니다. dispatch로 id와 content로 넘겨줘 수정합니다.
  const onSave = useCallback(
    (id) => {
      if (!editValue) {
        setEditError(true);

        return;
      }

      setIsEdit((prev) => !prev);
      dispatch(
        updateTodoRequest({
          id,
          content: editValue,
        })
      );
    },
    [dispatch, editValue]
  );

  if (isCheck === undefined) {
    return null;
  }

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
      {!isEdit ? (
        <TodoEdit onClick={() => onEdit()} />
      ) : (
        <TodoSave onClick={() => onSave(id)} />
      )}
      <TodoItem isCheck={isCheck}>
        {!isEdit ? (
          <p>{content}</p>
        ) : (
          <input
            placeholder={editError ? "수정값을 입력해주세요." : ""}
            value={editValue}
            onChange={onChange}
          />
        )}
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

const TodoListItemWrapper = styled.li`
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

  input {
    width: 100%;
  }
`;

const TodoEdit = styled(MdEdit)`
  color: #22b8cf;
  margin-left: 5px;
`;

const TodoSave = styled(MdSave)`
  color: #22b8cf;
  margin-left: 5px;
`;

const TodoCreateAt = styled.p`
  min-width: 180px;
`;

export default TodoListItem;
