import React from "react";
import { GlobalStyle } from "../src/shared/Global.styled";
import { addDecorator } from "@storybook/react";

addDecorator((s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
