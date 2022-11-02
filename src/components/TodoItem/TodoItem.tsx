import React from "react";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import { TodoItemModel } from "../../App";
import { Status } from "../../App";

const TodoItem: React.FC<{
  item: TodoItemModel;
  updateTodoItemStatus: (id: string, status: Status) => void;
  onContentClick: (id: string) => void;
}> = ({ item, updateTodoItemStatus, onContentClick }) => {
  const handleCheckStatus = () => {
    let itemStatus: Status;
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
        <TodoCheckbox checkStatus={item.status} />
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
