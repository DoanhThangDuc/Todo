import styled from "styled-components";

export const StyledTodoList = styled.div`
  position: relative;
  height: 100vh;
  flex: 1;
`;
export const StyledList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: calc(50vw - 12rem);
  top: 20vh;
  left: 2rem;
  & ul,
  li {
    list-style: none;
  }
  
  `;
export const TodoContainer = styled.ul`
display: flex;
flex-direction: column;

`
export const HeadContent = styled.p`
  padding: 0 0 1rem 6rem;
  color: #434141;
  font-family: "Work Sans";
  font-style: italic;
  font-size: 4rem;
  letter-spacing: 3px;
  text-decoration: underline 3px;
  text-underline-offset: 5px;
`;


export const InputBtn = styled.button`
  /* display: flex; */
  display: none;
  justify-content: left;
  padding: 20px 0 20px 30px;
  background-color: inherit;
  color: #434343;
  border: none;
  cursor: pointer;
`;
