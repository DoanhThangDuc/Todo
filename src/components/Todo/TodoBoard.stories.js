import React from "react";
import TodoBoard from "./TodoBoard";

export default {
  component: TodoBoard,
  title: "Todo Board",
};

const Template = (args) => <TodoBoard {...args} />;

export const Default = Template.bind({});
export const InputItems = Template.bind({});
InputItems.args = {
  itemValues: [
    { content: "todoInput", status: "unchecked", id: "todoInput" },
    { content: "todoInput2", status: "crossed", id: "todoInput2" },
    { content: "todoInput3", status: "checked", id: "todoInput3" },
  ],
};
