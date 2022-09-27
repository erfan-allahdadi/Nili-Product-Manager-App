import { createTheme } from "@mui/material/styles";

// create Custom Theme
export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Vazir",
        button:{
            fontSize:"1.2rem",
            fontFamily: "Vazir",
        }
    },
    palette:{
        mode:"light"
    }
})