import React from "react";
import { Meta, Story } from "@storybook/react";
import TodoCheckbox from "./TodoCheckbox";
import { Status } from "../../App";

export default {
  component: TodoCheckbox,
  title: "Todo Checkbox",
} as Meta;

const Template: Story<{ checkStatus: Status }> = (args) => (
  <TodoCheckbox {...args}></TodoCheckbox>
);

export const Default = Template.bind({});
Default.args = {
  checkStatus: "unchecked",
};

export const Checked = Template.bind({});
Checked.args = {
  checkStatus: "checked",
};

export const Crossed = Template.bind({});
Crossed.args = {
  checkStatus: "crossed",
};
