import { useState, useCallback, memo } from "react";
import { Item, Icons, Content, ChatIcon } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";

function TodoItem({ content, item, state, setState }) {
  const { todoItem, filter } = state;

  const handleCheckStatus = () => {
    switch (item.status) {
      case "unchecked":
        item.status = "checked";
        setState({ ...state, todoItem: todoItem });
        break;
      case "checked":
        item.status = "crossed";
        setState({ ...state, todoItem: todoItem });
        break;
      case "crossed":
        item.status = "unchecked";
        setState({ ...state, todoItem: todoItem });
        break;
    }
  };

  return (
    <Item>
      <Icons onClick={handleCheckStatus}>
        <ChatIcon size="2.5rem" />
        <TodoCheckbox checkStatus={item.status}></TodoCheckbox>
      </Icons>
      <Content>{content}</Content>
    </Item>
  );
}

export default memo(TodoItem);
