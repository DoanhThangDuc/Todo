import React from "react";
import { Meta, Story } from "@storybook/react";
import TodoBoard from "./TodoBoard";
import { TodoBoardProps } from "./TodoBoard";

export default {
  component: TodoBoard,
  title: "Todo Board",
} as Meta;

const Template: Story<TodoBoardProps> = (args) => <TodoBoard {...args} />;

export const Default = Template.bind({});
export const InputItems = Template.bind({});
InputItems.args = {
  todoItems: [
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
    {
      content: "todoInput3",
      status: "checked",
      id: "todoInput3",
      strikeThrough: false,
    },
  ],
};
export const strikeThrough = Template.bind({});
strikeThrough.args = {
  todoItems: [
    {
      content: "todoInput",
      status: "unchecked",
      id: "todoInput",
      strikeThrough: false,
    },
    {
      content: "todoInput",
      status: "checked",
      id: "todoInput",
      strikeThrough: true,
    },
    {
      content: "todoInput",
      status: "crossed",
      id: "todoInput",
      strikeThrough: false,
    },
  ],
};
