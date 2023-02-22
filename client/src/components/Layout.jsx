import { useState } from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from '../theme';
import Topbar from "./Topbar";
import './Layout.css'

const Layout = ({ children }) => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Container className="layout">
          {children}
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Layout