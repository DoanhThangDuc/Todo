import styled from "styled-components";

export const StyledTodoList = styled.div`
  position: relative;
  height: 100vh;
  flex: 1;
`;
export const StyledList = styled.div`
  position: absolute;
  display: flex;
  top: 20vh;
  width: calc(50vw - 12rem);
  left: 2.5rem;
  flex-direction: column;
  & ul,
  li {
    list-style: none;
  }
  & ul {
    display: flex;
    flex-direction: column;
  }
`;
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
export const ListContent = styled.li`
display: inline-flex;
  padding: 1rem 0 0 6rem;
  color: #434141;
  font-family: "Work Sans";
  font-style: italic;
  font-size: 1.5rem;
  & p{
    padding-left: 10px;
  }
`;
