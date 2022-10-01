import { memo } from "react";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import PropTypes from "prop-types";

function TodoItem({
  item,
  updateTodoItemStatus,
  onUpdateTodoItemStrikeThrough,
  onDeleteTodoItem,
}) {
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

  const handleStrikethrough = (id) => {
    let strike = item.strikeThrough;
    if (strike === true) return onDeleteTodoItem(id);
    strike = true;
    onUpdateTodoItemStrikeThrough(id, strike);
  };
  return (
    <Item>
      <Icons onClick={handleCheckStatus}>
        <TodoCheckbox checkStatus={item.status}></TodoCheckbox>
      </Icons>
      <Content
        onClick={() => handleStrikethrough(item.id)}
        lineThrough={item.strikeThrough}
      >
        {item.content}
      </Content>
    </Item>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
export default memo(TodoItem);
