import { useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import {
  StyledTodoList,
  StyledList,
  HeadContent,
  Content,
  Icons,
  InputBtn,
  InputSection,
  MonitorBtn,
} from "./TodoList.styled";
function TodoList() {
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <InputBtn>
          <AiOutlinePlus color="Red" style={{ paddingRight: "20px" }} />
          Add todolist
        </InputBtn>
        <InputSection>
          <input placeholder="Input check list..." />
          <MonitorBtn>
            <button>Add</button>
            <button>Close</button>
          </MonitorBtn>
        </InputSection>
        <ul>
          <Content>
            <Icons>
              <FaRegCommentAlt />
              <BsCheck2All
                size="3rem"
                style={{
                  position: "absolute",
                  marginLeft: "-35px",
                  marginTop: "-20px",
                }}
                color="red"
              />
            </Icons>
            <p>Content 1</p>
          </Content>
        </ul>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
