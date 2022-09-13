import { StyledInputSection, MonitorBtn } from "./InputSection.styled";

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
