import React from "react";
import TodoBoard from "./TodoBoard";

export default {
  component: TodoBoard,
  title: "Todo Board",
};

const Template = (args) => <TodoBoard {...args} />;

export const Default = Template.bind({})
Default.args = {
    
}
