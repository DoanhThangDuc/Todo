import {
  TickIcon,
  CrossIconContainer,
  IconContain,
  CrossIcon,
  TickIconContainer,
} from "./TodoCheckbox.styled";

function TodoCheckbox({ checkStatus }) {
  return (
    <IconContain>
      {checkStatus === "checked" && (
        <TickIconContainer>
          <TickIcon size="3rem"></TickIcon>
        </TickIconContainer>
      )}
      {checkStatus === "crossed" && (
        <CrossIconContainer>
          <CrossIcon size="2rem"></CrossIcon>
        </CrossIconContainer>
      )}
    </IconContain>
  );
}
export default TodoCheckbox;
