import { FiMessageSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Content, Icons } from "./TodoItem.styled";


{/* <Content>
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
</Content> */}


function TodoItem() {
  return (
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
  );
}

export default TodoItem;
