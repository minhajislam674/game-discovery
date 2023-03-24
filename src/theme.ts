// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { color } from "framer-motion";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  gray: {
    50: "#f5f5f5",
  },
};

//add fonts

const fonts = {
  heading: "Roboto",
  body: "Roboto",
};

// 3. extend the theme
const theme = extendTheme({ config, colors, fonts });

export default theme;
