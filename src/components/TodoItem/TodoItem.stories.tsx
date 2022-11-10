import React from "react";
import { Meta, Story } from "@storybook/react";
import { Status, TodoItemModal } from "../../store";
import TodoItem from "./TodoItem";

export default {
  component: TodoItem,
  title: "Todo Item",
} as Meta;

const Template: Story<{
  item: TodoItemModal;
  updateTodoItemStatus: ({
    itemId,
    itemStatus,
  }: {
    itemId: string;
    itemStatus: Status;
  }) => void;
  handleUpdateStrikeThrough: (id: string) => void;
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
    strikeThrough: false,
  },
};
