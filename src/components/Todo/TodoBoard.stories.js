import React from "react";
import TodoBoard from "./TodoBoard";
import GlobalStyle from "../../shared/Global.styled";

export default {
  component: TodoBoard,
  title: "Todo Board",
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        {Story()}
      </>
    ),
  ],
};

const Template = (args) => <TodoBoard {...args} />;

export const Default = Template.bind({});
export const InputItems = Template.bind({});
InputItems.args = {
  
}
