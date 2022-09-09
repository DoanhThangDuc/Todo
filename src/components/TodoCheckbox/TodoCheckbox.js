import {
  TickIcon,
  DeleteIcon,
  IconContain,
  ClearIcon,
  CheckIcon,
} from "./TodoCheckbox.styled";

function TodoCheckbox({ check, unCheck }) {
  return (
    <IconContain>
      {check && (
        <CheckIcon>
          <TickIcon size="3rem"></TickIcon>
        </CheckIcon>
      )}
      {unCheck && (
        <DeleteIcon>
          <ClearIcon size="2rem"></ClearIcon>
        </DeleteIcon>
      )}
    </IconContain>
  );
}
export default TodoCheckbox;
