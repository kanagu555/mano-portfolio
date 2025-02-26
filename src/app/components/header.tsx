"use client"

import type React from "react"
import { useState, useEffect } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import type { PaletteMode } from "@mui/material"
import { useTheme } from "@mui/material/styles"

const pages = ["About", "Experience", "Education", "Certifications", "Skills"]

interface HeaderProps {
  mode: PaletteMode
  setMode: (mode: PaletteMode) => void
}

export default function Header({ mode, setMode }: HeaderProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    handleCloseNavMenu()
  }

  const headerStyle = {
    background: isScrolled
      ? theme.palette.mode === "dark"
        ? "rgba(18, 18, 18, 0.8)"
        : "rgba(255, 255, 255, 0.8)"
      : "transparent",
    boxShadow: isScrolled ? 1 : 0,
    transition: "all 0.3s ease",
    backdropFilter: isScrolled ? "blur(10px)" : "none",
  }

  const textStyle = {
    color: isScrolled ? theme.palette.text.primary : theme.palette.mode === "dark" ? "#fff" : "#1a237e",
  }

  return (
    <AppBar position="fixed" sx={headerStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              background: "linear-gradient(45deg, #2196f3, #f50057)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textDecoration: "none",
            }}
          >
            MP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={textStyle}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => scrollToSection(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              background: "linear-gradient(45deg, #2196f3, #f50057)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textDecoration: "none",
            }}
          >
            MP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => scrollToSection(page)}
                sx={{
                  my: 2,
                  ...textStyle,
                  display: "block",
                  "&:hover": {
                    background: "linear-gradient(45deg, #2196f3, #f50057)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{
                ml: 1,
                ...textStyle,
                "&:hover": {
                  transform: "rotate(180deg)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

