import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "200": "#fad981",
      "400": "#FFBA08",
    },
    gray: {
      "500": "#47585B",
      "400": "#999999",
      "300": "#DADADA",
      "200": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
      },
    },
  },
});
