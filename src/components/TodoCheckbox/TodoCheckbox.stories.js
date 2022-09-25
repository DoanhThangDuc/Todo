import React from "react";
import TodoCheckbox from "./TodoCheckbox";

export default {
  component: TodoCheckbox,
  title: "Todo Checkbox",
};

const Template = (args) => <TodoCheckbox {...args}></TodoCheckbox>;

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
