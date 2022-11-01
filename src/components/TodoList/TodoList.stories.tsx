import React from "react";
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import TodoList from "./TodoList";

type TodoListProps = ComponentProps<typeof TodoList>;

export default {
  component: TodoList,
  title: "Todo List",
} as Meta<TodoListProps>;

const Template: Story<TodoListProps> = (args) => (
  <TodoList {...args}></TodoList>
);

export const Default = Template.bind({});

export const AddMoreItems = Template.bind({});
AddMoreItems.args = {
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
  ],
};
