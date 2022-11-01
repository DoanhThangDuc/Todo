import React from "react";
import { TickIcon, CrossIcon, IconsContainer } from "./TodoCheckbox.styled";
import { ChatIcon } from "./TodoCheckbox.styled";

function TodoCheckbox({
  checkStatus,
}: {
  checkStatus: "unchecked" | "checked" | "crossed";
}) {
  return (
    <IconsContainer>
      <ChatIcon size="2.5rem" />
      {checkStatus === "checked" && <TickIcon size="3rem"></TickIcon>}
      {checkStatus === "crossed" && <CrossIcon size="2rem"></CrossIcon>}
    </IconsContainer>
  );
}

export default TodoCheckbox;
