import styled from "styled-components";

export const StyledInputSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  & input {
    width: 70%;
    margin: auto;
    height: 6vh;
    border: none;
    padding-left: 10px;

    font-family: "Work Sans";
    font-size: 1.5rem;

    color: #434141;
    background-color: inherit;
  }
`;
export const MonitorBtn = styled.div`
  height: 100%;
  padding-top: 20px;
  color: red;
  align-self: flex-end;
  padding-right: 10px;
  font-size: 1rem;
  & button {
    cursor: pointer;
    margin-right: 3px;
    width: 4rem;
    font-weight: bold;
    color: #434141;
  }
  & button:first-child:hover {
    color: #1b720b;
    font-weight: bold;
    border: none;
  }
  & button:nth-child(2):hover {
    font-weight: bold;
    color: red;
    border: none;
  }
`;
