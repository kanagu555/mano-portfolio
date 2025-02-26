"use client"

import { useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Experience from "./components/experience"
import Education from "./components/education"
import Certifications from "./components/certifications"
import Skills from "./components/skills"
import Footer from "./components/footer"
import type { PaletteMode } from "@mui/material"

export default function Portfolio() {
  const [mode, setMode] = useState<PaletteMode>("light")

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#f50057",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header mode={mode} setMode={setMode} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

