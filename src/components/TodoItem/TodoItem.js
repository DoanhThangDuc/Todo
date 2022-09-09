import { FiMessageSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Content, Icons } from "./TodoItem.styled";

function TodoItem({ background, check, unCheck }) {
  return (
    <Content background={background}>
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
            display: !check && "none",
            position: "absolute",
            marginLeft: "-40px",
            marginTop: "-12px",
          }}
          color="#4e4949"
        />
        <FaTimes
          size="2rem"
          style={{
            display: !unCheck && "none",
            position: "absolute",
            marginLeft: "-35px",
          }}
          color="#d73636"
        />
      </Icons>
      <p>Lorem ipsum dolor sit amet</p>
    </Content>
  );
}

export default TodoItem;
