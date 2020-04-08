import React, { ReactElement } from "react";
import { ThemeProvider as Theme } from "styled-components";
import { Props } from "./types";
import theme from "./utils/theme";

const ThemeProvider = ({ children }: Props): ReactElement => {
  return <Theme theme={theme}>{children}</Theme>;
};

export default ThemeProvider;
