import { useContext, useRef } from "react";
import Context from "./store/Context";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import { setTodoInput, createTodos } from "./store/actions";
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
  const [state, dispatch] = useContext(Context);
  const { todoInput, todos, isInputExpand } = state;
  console.log(isInputExpand);
  const handleSubmit = () => {
    dispatch(createTodos(todoInput));
    dispatch(setTodoInput(""));
    nameRef.current.focus();
  };
  const nameRef = useRef();
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <ul>
          {todos.map((todo, index) => {
            return (
              <Content key={index}>
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
                <p>{todo}</p>
              </Content>
            );
          })}
        </ul>
        <InputBtn>
          <AiOutlinePlus color="Red" style={{ paddingRight: "20px" }} />
          Add todolist
        </InputBtn>
        <InputSection>
          <input
            value={todoInput}
            ref={nameRef}
            onChange={(e) => {
              dispatch(setTodoInput(e.target.value));
            }}
            placeholder="Input check list..."
          />

          <MonitorBtn>
            <button onClick={handleSubmit}>Add</button>
            <button >Close</button>
          </MonitorBtn>
        </InputSection>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
