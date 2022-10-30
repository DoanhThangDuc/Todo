import React from "react";
import { Meta, Story } from "@storybook/react";
import TodoList from "./TodoList";
import { TodoItemType } from "../Todo/TodoBoard";

export default {
  component: TodoList,
  title: "Todo List",
} as Meta;

const Template: Story<{ items: TodoItemType[] }> = (args) => (
  <TodoList {...args}></TodoList>
);

export const Default = Template.bind({});

export const AddMoreItems = Template.bind({});
AddMoreItems.args = {
  items: [
    {
      content: "todoInput",
      status: "unchecked",
      id: "todoInput",
      strikeThrough: false,
    },
    {
      content: "todoInput2",
      status: "crossed",
      id: "todoInput2",
      strikeThrough: false,
    },
  ],
};
