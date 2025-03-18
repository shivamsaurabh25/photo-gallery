import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import "./index.css";

const App = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);

export default App;