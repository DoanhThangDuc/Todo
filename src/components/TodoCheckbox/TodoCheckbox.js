import {
  TickIcon,
  DeleteIcon,
  IconContain,
  ClearIcon,
  CheckIcon,
} from "./TodoCheckbox.styled";

function TodoCheckbox({ checkStatus }) {
  return (
    <IconContain>
      {checkStatus === "checked" && (
        <CheckIcon>
          <TickIcon size="3rem"></TickIcon>
        </CheckIcon>
      )}
      {checkStatus === "crossed" && (
        <DeleteIcon>
          <ClearIcon size="2rem"></ClearIcon>
        </DeleteIcon>
      )}
    </IconContain>
  );
}
export default TodoCheckbox;
