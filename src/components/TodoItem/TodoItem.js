import { FiMessageSquare } from "react-icons/fi";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";

function TodoItem({ background, checkStatus, content }) {
  return (
    <Item>
      <Icons>
        <FiMessageSquare
          size="2.5rem"
          style={{
            transform: "scaleX(-1)",
            color: "#3d3a3a",
          }}
        />
        <TodoCheckbox checkStatus={checkStatus}></TodoCheckbox>
      </Icons>
      <Content background={background}>{content}</Content>
    </Item>
  );
}

export default TodoItem;
