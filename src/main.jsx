import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3'