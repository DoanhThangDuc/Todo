import { TickIcon, CrossIcon, IconsContainer } from "./TodoCheckbox.styled";
import { ChatIcon } from "./TodoCheckbox.styled";
import PropTypes from "prop-types";
import { Status } from "../../store";

function TodoCheckbox({ checkStatus }: { checkStatus: Status }) {
  return (
    <IconsContainer>
      <ChatIcon size="2.5rem" />
      {checkStatus === "checked" && <TickIcon size="3rem"></TickIcon>}
      {checkStatus === "crossed" && <CrossIcon size="2rem"></CrossIcon>}
    </IconsContainer>
  );
}
TodoCheckbox.propTypes = {
  checkStatus: PropTypes.string.isRequired,
};
export default TodoCheckbox;
