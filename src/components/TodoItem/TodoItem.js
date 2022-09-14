import { useState } from "react";
import { Item, Icons, Content, ChatIcon } from "./TodoItem.styled";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";

function TodoItem({ content }) {
  const checkboard = ["unchecked", "checked", "crossed"];
  const [checkStatus, setCheckStatus] = useState("unchecked");
  const handleCheckStatus = () => {
    switch (checkStatus) {
      case "unchecked":
        return setCheckStatus("checked");
      case "checked":
        return setCheckStatus("crossed");
      case "crossed":
        return setCheckStatus("unchecked");
    }
  };
  return (
    <Item>
      <Icons onClick={handleCheckStatus}>
        <ChatIcon size="2.5rem"  />
        <TodoCheckbox checkStatus={checkStatus}></TodoCheckbox>
      </Icons>
      <Content>{content}</Content>
    </Item>
  );
}

export default TodoItem;
