import { RouterProvider } from "react-router-dom";
import route from "./Route/route";
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme/Muitheme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={route} />
      </ThemeProvider>
    </>
  );
}

export default App;
