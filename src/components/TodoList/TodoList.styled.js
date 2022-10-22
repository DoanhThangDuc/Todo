import styled from "styled-components";

export const StyledTodoList = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
`;
export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  & ul,
  li {
    list-style: none;
  }
`;
export const TodoContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const HeadContent = styled.p`
  padding: 2.9em 0 0 2.9em;
  color: #434141;
  font-family: "Work Sans";
  font-style: italic;
  font-size: 4rem;
  letter-spacing: 3px;
  text-decoration: underline 3px;
  text-underline-offset: 5px;
`;

export const InputBtn = styled.button`
  display: none;
  justify-content: left;
  background-color: inherit;
  color: #434343;
  border: none;
  cursor: pointer;
`;
export const StyleFilterPanel = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: space-around;
  width: 27em;
  margin: 42em 0 0 6em;
  & h2 {
    color: #434343;
    font-size: 20px;
  }
  & button {
    width: 20%;
    border: none;
    border-right: 1px solid black;
    background-color: inherit;
    cursor: pointer;
  }
  & button:nth-child(2):hover {
    color: yellow;
    font-weight: bold;
    font-size: 17px;
  }
  & button:nth-child(3):hover {
    color: green;
    font-weight: bold;
    font-size: 17px;
  }
  & button:nth-child(4):hover {
    color: red;
    font-weight: bold;
    font-size: 17px;
  }
`;
