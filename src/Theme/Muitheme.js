import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

const theme = createTheme({
    // const [mode , setMode] = useState(''),
    
  palette: {
    mode: "light",
    primary: {
      main: "#3E2723",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
