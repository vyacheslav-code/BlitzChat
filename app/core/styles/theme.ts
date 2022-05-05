import { red, deepOrange, purple } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: purple,

    error: {
      main: red.A400,
    },
  },
})

export default theme
