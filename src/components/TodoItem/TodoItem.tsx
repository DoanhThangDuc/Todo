import { observer } from "mobx-react-lite";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import { TodoItemModal, Status } from "../../store";

function TodoItem({
  item,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
}: {
  item: TodoItemModal;
  updateTodoItemStatus: ({
    itemId,
    itemStatus,
  }: {
    itemId: string;
    itemStatus: Status;
  }) => void;
  handleUpdateStrikeThrough: (id: string) => void;
}) {
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
    const itemId = item.id;
    updateTodoItemStatus({ itemId, itemStatus });
  };

  return (
    <Item>
      <Icons onClick={handleCheckStatus}>
        <TodoCheckbox checkStatus={item.status}></TodoCheckbox>
      </Icons>
      <Content
        onClick={() => handleUpdateStrikeThrough(item.id)}
        lineThrough={item.strikeThrough}
      >
        {item.content}
      </Content>
    </Item>
  );
}

export default observer(TodoItem);
