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

export const CheckedItem = Template.bind({});
CheckedItem.args = {
  item: {
    content: "content 1",
    status: "checked",
    id: "content 1",
  },
};
export const CrossedItem = Template.bind({});
CrossedItem.args = {
  item: {
    content: "content 1",
    status: "crossed",
    id: "content 1",
  },
};