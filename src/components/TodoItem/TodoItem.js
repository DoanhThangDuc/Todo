import { observer } from "mobx-react-lite";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import PropTypes from "prop-types";

function TodoItem({ item, updateTodoItemStatus, onContentClick }) {
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
    updateTodoItemStatus({ itemId, itemStatus });
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
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
export default observer(TodoItem);
