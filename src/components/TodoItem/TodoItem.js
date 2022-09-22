import { memo } from "react";
import { Item, Icons, Content, ChatIcon } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";

function TodoItem({ item, updateTodoItemStatus }) {
  const handleCheckStatus = () => {
    let itemStatus;
    switch (item.status) {
      case "unchecked":
        itemStatus = "checked";
        break;
      case "checked":
        itemStatus = "crossed";
        break;
      case "crossed":
        itemStatus = "unchecked";
        break;
      default:
        itemStatus = "unchecked";
        break;
    }
    updateTodoItemStatus(item.id, itemStatus);
  };
  return (
    <Item>
      <Icons onClick={handleCheckStatus}>
        <ChatIcon size="2.5rem" />
        <TodoCheckbox checkStatus={item.status}></TodoCheckbox>
      </Icons>
      <Content>{item.content}</Content>
    </Item>
  );
}

export default memo(TodoItem);
