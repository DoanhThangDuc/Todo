import { memo } from "react";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
} from "../../features/todos/todosSlice";

function TodoItem({ item }) {
  const dispatch = useDispatch();

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
    const itemId = item.id;
    dispatch(updateTodoItemStatus({ itemId, itemStatus }));
  };

  return (
    <Item>
      <Icons onClick={handleCheckStatus}>
        <TodoCheckbox checkStatus={item.status}></TodoCheckbox>
      </Icons>
      <Content
        onClick={() => dispatch(handleUpdateStrikeThrough(item.id))}
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
