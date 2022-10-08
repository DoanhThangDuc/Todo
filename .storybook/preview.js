import React from "react";
import { GlobalStyle } from "../src/shared/Global.styled";
import { addDecorator } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../src/store";
addDecorator((story) => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      {story()}
    </Provider>
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
