import { useState, memo } from "react";
import { Item, Icons, Content, ChatIcon } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";

function TodoItem({ content, id, updateTodoItem, status }) {
  const [checkStatus, setCheckStatus] = useState(status);

  const handleCheckStatus = () => {
    setCheckStatus((preState) => {
      let nextState;
      switch (preState) {
        case "unchecked":
          nextState = "checked";
          break;
        case "checked":
          nextState = "crossed";
          break;
        case "crossed":
          nextState = "unchecked";
          break;
        default:
          nextState = "unchecked";
          break;
      }
      updateTodoItem(id, nextState);
      return nextState;
    });
  };
  return (
    <Item>
      <Icons onClick={handleCheckStatus}>
        <ChatIcon size="2.5rem" />
        <TodoCheckbox checkStatus={checkStatus}></TodoCheckbox>
      </Icons>
      <Content>{content}</Content>
    </Item>
  );
}

export default memo(TodoItem);
