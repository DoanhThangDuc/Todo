import styled, { css } from "styled-components";

export const Item = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 2rem 0 0 6rem;
  color: #434141;
  font-family: "Work Sans";
  font-weight: 600;
  color: #615b5b;
  font-size: 1.5rem;
`;

const strikeThrough = `
  font-style: italic;
  color: #7e7171;
  text-decoration: line-through;
`;
export const Content = styled.p`
  background-color: ${(props) => props.background || "inherit"};
  ${(props) =>
    props.lineThrough
      ? css`
          ${strikeThrough}
        `
      : ""}
  text-decoration: ${(props) =>
    props.lineThrough === true ? "line-through" : "none"};
  padding-left: 50px;
  transform: translateY(-25%);
  cursor: pointer;
`;
export const Icons = styled.div`
  position: relative;
  cursor: pointer;
`;
