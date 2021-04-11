import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/playfair-display/500.css";
import "@fontsource/cairo";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CustomTheme from "./constants/custom.theme";
import { App } from "./pages";
import reportWebVitals from "./reportWebVitals";
import "./styles/globals.scss";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
