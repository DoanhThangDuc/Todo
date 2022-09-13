import { StyledInputSection, MonitorBtn } from "./InputSection.styled";
/// add something new
function InputSection() {
  return (
    <StyledInputSection>
      <input placeholder="enter task" />
      <MonitorBtn>
        <button>Add</button>
        <button>Close</button>
      </MonitorBtn>
    </StyledInputSection>
  );
}

export default InputSection;
