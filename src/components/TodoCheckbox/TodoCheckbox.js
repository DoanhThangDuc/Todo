import {
  TickIcon,
  CrossIconContainer,
  IconContain,
  CrossIcon,
  TickIconContainer,
} from "./TodoCheckbox.styled";
import PropTypes from "prop-types";

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
TodoCheckbox.propTypes = {
  checkStatus: PropTypes.string.isRequired,
};
export default TodoCheckbox;
