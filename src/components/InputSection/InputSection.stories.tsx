import React from "react";
import InputSection from "./InputSection";
import { Meta, Story } from "@storybook/react";

export default {
  component: InputSection,
  title: "Input Section",
} as Meta;

const Template: Story<{
  inputValues: string;
  onSubmitTodoContent: (input: string) => void;
}> = (args) => <InputSection {...args} />;

export const Default = Template.bind({});
export const InputValues = Template.bind({});
InputValues.args = {
  inputValues: "something input into this input",
};
