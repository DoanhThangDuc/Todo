import { useContext, useRef } from "react";
import Context from "./store/Context";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
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
                  <FiMessageSquare
                    size="2rem"
                    style={{ transform: "scaleX(-1)", color: "#756f6f" }}
                  />
                  <AiOutlineCheck
                    size="3rem"
                    style={{
                      position: "absolute",
                      marginLeft: "-35px",
                      marginTop: "-17px",
                    }}
                    color="#4e4949"
                  />
                </Icons>
                <p>{todo}</p>
              </Content>
            );
          })}

          <Content>
            <Icons>
              <FiMessageSquare
                size="2.5rem"
                style={{
                  transform: "scaleX(-1)",
                  color: "#3d3a3a",
                  
                }}
              />
              <AiOutlineCheck
                size="3rem"
                style={{
                  position: "absolute",
                  marginLeft: "-40px",
                  marginTop: "-12px",
                }}
                color="#4e4949"
              />
            </Icons>
            <p>Lorem ipsum dolor sit amet</p>
          </Content>

          <Content background="yellow">
            <Icons>
            <FiMessageSquare
                size="2.5rem"
                style={{
                  transform: "scaleX(-1)",
                  color: "#3d3a3a",
                  
                }}
              />
              <FaTimes
                size="2rem"
                style={{
                  position: "absolute",
                  marginLeft: "-35px",
                }}
                color="#d73636"
              />
            </Icons>
            <p>Lorem ipsum dolor sit amet</p>
          </Content>
          <Content background="#6868eb">
            <Icons>
              <FiMessageSquare
                size="2.5rem"
                style={{
                  transform: "scaleX(-1)",
                  color: "#3d3a3a",
                  
                }}
              />
              <AiOutlineCheck
                size="3rem"
                style={{
                  position: "absolute",
                  marginLeft: "-40px",
                  marginTop: "-12px",
                }}
                color="#4e4949"
              />
            </Icons>
            <p>Lorem ipsum dolor sit amet</p>
          </Content>
          <Content>
            <Icons>
              <FiMessageSquare
                size="2.5rem"
                style={{
                  transform: "scaleX(-1)",
                  color: "#3d3a3a",
                  
                }}
              />
              <AiOutlineCheck
                size="3rem"
                style={{
                  position: "absolute",
                  marginLeft: "-40px",
                  marginTop: "-12px",
                }}
                color="#4e4949"
              />
            </Icons>
            <p>Lorem ipsum dolor sit amet</p>
          </Content>
          <Content>
            <Icons>
              <FiMessageSquare
                size="2.5rem"
                style={{
                  transform: "scaleX(-1)",
                  color: "#3d3a3a",
                  
                }}
              />
              <AiOutlineCheck
                size="3rem"
                style={{
                  position: "absolute",
                  marginLeft: "-40px",
                  marginTop: "-12px",
                }}
                color="#4e4949"
              />
            </Icons>
            <p>Lorem ipsum dolor sit amet</p>
          </Content>
          <Content>
            <Icons>
              <FiMessageSquare
                size="2.5rem"
                style={{
                  transform: "scaleX(-1)",
                  color: "#3d3a3a",
                  
                }}
              />
              <AiOutlineCheck
                size="3rem"
                style={{
                  position: "absolute",
                  marginLeft: "-40px",
                  marginTop: "-12px",
                }}
                color="#4e4949"
              />
            </Icons>
            <p>Lorem ipsum dolor sit amet</p>
          </Content>
          <Content>
            <Icons>
              <FiMessageSquare
                size="2.5rem"
                style={{
                  transform: "scaleX(-1)",
                  color: "#3d3a3a",
                  
                }}
              />
              <AiOutlineCheck
                size="3rem"
                style={{
                  position: "absolute",
                  marginLeft: "-40px",
                  marginTop: "-12px",
                }}
                color="#4e4949"
              />
            </Icons>
            <p>Lorem ipsum dolor sit amet</p>
          </Content>

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
            <button>Close</button>
          </MonitorBtn>
        </InputSection>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
