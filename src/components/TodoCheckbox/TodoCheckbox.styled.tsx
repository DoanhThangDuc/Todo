import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export const IconsContainer = styled.div`
  position: relative;
`;
export const ChatIcon = styled(FiMessageSquare)`
  transform: scaleX(-1);
  color: "#3d3a3a";
`;
export const TickIcon = styled(AiOutlineCheck)`
  position: absolute;
  left: 0;
  top: -12px;
  color: "#3d3a3a";
`;
export const CrossIcon = styled(FaTimes)`
  position: absolute;
  left: 4px;
  top: 1px;
  color: red;
`;
