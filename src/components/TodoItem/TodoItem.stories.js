import React from "react";
import TodoItem from "./TodoItem";

export default {
  component: TodoItem,
  title: "Todo Item",
};

const Template = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    content: "content 1",
    status: "unchecked",
    id: "content 1",
  },
};
