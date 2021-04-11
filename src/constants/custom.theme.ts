import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  colors: {
    brand: {
      primary: "#341F97",
      primaryDark: "#35209B",
      accent: "#EA7F02",
    },
  },
  fonts: {
    heading: "Playfair Display",
    body: "Cairo",
  },
});
export default CustomTheme;
