import Header from "src/layout/Header.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useState} from "react";
import {Outlet} from "react-router-dom";
function App() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? "dark" : "light"
    const theme = createTheme({
        palette: {
            mode: paletteType
        }
    })
    function handleThemeChange() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header handleThemeChange={handleThemeChange} />
        <Container >
            <Outlet />
        </Container>
    </ThemeProvider>
  )
}

export default App
