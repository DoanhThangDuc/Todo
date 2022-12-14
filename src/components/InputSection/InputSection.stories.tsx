import React from "react";
import { Meta, Story } from "@storybook/react";
import InputSection from "./InputSection";

export default {
  component: InputSection,
  title: "Input Section",
} as Meta;

const Template: Story<{
  onSubmitTodoContent: (todoInput: string) => void;
  initialInput: string;
}> = (args) => <InputSection {...args} />;

export const Default = Template.bind({});

export const InputValues = Template.bind({});
InputValues.args = {
  initialInput: "something input into this input",
};
