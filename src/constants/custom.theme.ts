import { extendTheme } from "@chakra-ui/react";

import COLORS from "./colors";

const CustomTheme = extendTheme({
  colors: {
    brand: {
      primary: COLORS.primary,
      primaryDark: COLORS.primaryDark,
      accent: COLORS.accent,
    },
  },
  fonts: {
    heading: "Playfair Display",
    body: "Cairo",
  },
});
export default CustomTheme;
