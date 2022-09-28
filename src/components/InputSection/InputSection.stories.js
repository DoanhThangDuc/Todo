import React from "react";
import InputSection from "./InputSection";

export default {
  component: InputSection,
  title: "Input Section",
};

const Template = (args) => <InputSection {...args} />;

export const Default = Template.bind({});
export const InputValues = Template.bind({});
InputValues.args = {
  inputValues: "something input into this input",
};
