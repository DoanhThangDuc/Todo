import React from "react";
import { Meta, Story } from "@storybook/react";
import TodoItem from "./TodoItem";
import { TodoItemType } from "../Todo/TodoBoard";

export default {
  component: TodoItem,
  title: "Todo Item",
} as Meta;

const Template: Story<{
  item: TodoItemType;
  updateTodoItemStatus: (id: string, status: string) => void;
  onContentClick: (id: string) => void;
}> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    content: "content 1",
    status: "unchecked",
    id: "content 1",
    strikeThrough: false,
  },
};

export const CheckedItem = Template.bind({});
CheckedItem.args = {
  item: {
    content: "content 1",
    status: "checked",
    id: "content 1",
    strikeThrough: false,
  },
};
export const CrossedItem = Template.bind({});
CrossedItem.args = {
  item: {
    content: "content 1",
    status: "crossed",
    id: "content 1",
    strikeThrough: false,
  },
};
export const StrikeThrough = Template.bind({});
StrikeThrough.args = {
  item: {
    content: "content 1",
    status: "crossed",
    id: "content 1",
    strikeThrough: true,
  },
};
