import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

export const IconContain = styled.div`
  position: absolute;
  top: 12px;
`;
export const TickIcon = styled(AiOutlineCheck)`
  margin-left: 0px;
  margin-top: -30px;
  color: #4e4949;
`;
export const CheckIcon = styled.div``;

export const ClearIcon = styled(FaTimes)`
  color: red;
`;
export const DeleteIcon = styled.div`
  position: absolute;
  top: -11px;
  left: 2px;
`;
