import React from "react";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import { ItemValues } from "../Todo/TodoBoard";

interface TodoItemProps {
  item: ItemValues;
  updateTodoItemStatus: (id: string, status: string) => void;
  onContentClick: (id: string) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({
  item,
  updateTodoItemStatus,
  onContentClick,
}) => {
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
        <TodoCheckbox checkStatus={item.status}></TodoCheckbox>
      </Icons>
      <Content
        onClick={() => onContentClick(item.id)}
        lineThrough={item.strikeThrough}
      >
        {item.content}
      </Content>
    </Item>
  );
};

export default TodoItem;
