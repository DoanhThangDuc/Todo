import React from "react";
import TodoList from "./TodoList";
import GlobalStyle from "../../shared/Global.styled";

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

const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {};
