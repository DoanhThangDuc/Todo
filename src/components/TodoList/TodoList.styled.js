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
export const Content = styled.li`
  display: inline-flex;
  padding: 1rem 0 0 6rem;
  color: #434141;
  font-family: "Work Sans";
  font-style: italic;
  font-size: 1.5rem;
  & p {
    padding-left: 10px;
  }
`;
export const Icons = styled.div`
  cursor: pointer;
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
export const InputSection = styled.div`
  /* display: flex; */
  display: none;
  flex-direction: column;

  & input {
    width: 98%;
    height: 6vh;
    border-radius: 5px;
    padding-left: 10px;
    border: 1px solid #a5a1a1;

    font-family: "Work Sans";
    font-size: 1.5rem;
    font-style: italic;

    color: #434141;
    background-color: inherit;
  }
`;
export const MonitorBtn = styled.div`
  height: 100%;
  color: red;
  align-self: flex-end;
  padding-right: 10px;
  font-size: 1rem;
  & button {
    cursor: pointer;
    margin-right: 3px;
    width: 4rem;
  }
  & button:first-child:hover {
    color: #528d41;
  }
  & button:nth-child(2):hover {
    color: red;
  }
`;
