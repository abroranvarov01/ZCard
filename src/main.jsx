import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { client } from "./config/query-client.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./config/mui-config.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
        <CssBaseline />
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);
