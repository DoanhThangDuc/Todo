import React from "react";
import { addDecorator } from "@storybook/react";

import { GlobalStyle } from "../src/shared/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/App.js";

// addDecorator((story) => (
//   <ThemeProvider theme={theme}>
//     <GlobalStyle>{story()}</GlobalStyle>
//   </ThemeProvider>
// ));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
