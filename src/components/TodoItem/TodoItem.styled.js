import styled from "styled-components";

export const Item = styled.li`
  display: inline-flex;
  /* display: none; */
  padding: 1rem 0 0 3rem;
  color: #434141;
  font-family: "Work Sans";
  font-weight: 600;
  color: #615b5b;
  /* font-style: italic; */
  font-size: 1.5rem;
`;
export const Content = styled.p`
  background-color: ${(props) => props.background || "inherit"};
  padding-left: 50px;
`;

export const Icons = styled.div`
position: relative;
  cursor: pointer;
`;
