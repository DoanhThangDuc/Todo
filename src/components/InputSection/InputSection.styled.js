import styled from "styled-components";

export const StyledInputSection = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1.5em 0 0 3.5em;
  & input {
    height: 6vh;
    width: 100%;
    border: 1px solid black;
    padding-left: 10px;

    font-family: "Work Sans";
    font-size: 1.5rem;

    color: #434141;
    background-color: inherit;
    cursor: pointer;
  }
`;
export const MonitorBtn = styled.div`
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
