import { FiMessageSquare } from "react-icons/fi";
import { Item, Icons, Content } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";

function TodoItem({ background, check, unCheck }) {
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
        <TodoCheckbox check={check} unCheck={unCheck}></TodoCheckbox>
      </Icons>
      <Content background={background}>Lorem ipsum dolor sit amet</Content>
    </Item>
  );
}

export default TodoItem;
