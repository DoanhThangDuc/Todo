import React from "react";
import GlobalStyle from "../../shared/Global.styled";
import TodoList from "./TodoList";

export default {
  component: TodoList,
  title: "Todo List",
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        {Story()}
      </>
    ),
  ],
};

const Template = (args) => <TodoList {...args}></TodoList>;

export const Default = Template.bind({});
export const AddMoreItems = Template.bind({});
AddMoreItems.args = {
  itemValues: [
    { content: "todoInput", status: "unchecked", id: "todoInput" },
    { content: "todoInput2", status: "crossed", id: "todoInput2" },
    { content: "todoInput3", status: "checked", id: "todoInput3" },
  ],
};
