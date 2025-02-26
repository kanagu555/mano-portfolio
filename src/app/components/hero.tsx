"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import { GitHub, LinkedIn, Email, LocationOn, Download } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

export default function Hero() {
  const theme = useTheme()

  const handleDownloadResume = () => {
    // Replace with your actual resume file URL
    const resumeUrl = "/ManoPrabha_K_Resume.pdf"
    window.open(resumeUrl, "_blank")
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(45deg, #1a237e 30%, #311b92 90%)"
            : "linear-gradient(45deg, #bbdefb 30%, #e3f2fd 90%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack alignItems="center" spacing={3}>
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                background: "linear-gradient(45deg, #2196f3, #f50057)",
                borderRadius: "50%",
                zIndex: 0,
              },
            }}
          >
            <Avatar
              alt="ManoPrabha K"
              src="/placeholder.svg"
              sx={{
                width: { xs: 200, md: 250 },
                height: { xs: 200, md: 250 },
                border: `4px solid ${theme.palette.background.paper}`,
                position: "relative",
              }}
            />
          </Box>
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: { xs: "3rem", md: "4rem" },
              fontWeight: 700,
              background: "linear-gradient(45deg, #2196f3, #f50057)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ManoPrabha K
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 600,
              color: theme.palette.mode === "dark" ? "#fff" : "#1a237e",
            }}
          >
            Testing Professional
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              maxWidth: "600px",
              color: theme.palette.mode === "dark" ? "#e3f2fd" : "#1a237e",
              opacity: 0.9,
            }}
          >
            Dedicated QA Engineer with expertise in manual and automated testing, ensuring software quality and
            reliability.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Tooltip title="GitHub Profile">
              <IconButton
                color="primary"
                size="large"
                sx={{
                  bgcolor: "background.paper",
                  "&:hover": { transform: "translateY(-3px)" },
                  transition: "transform 0.2s",
                }}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn Profile">
              <IconButton
                color="primary"
                size="large"
                sx={{
                  bgcolor: "background.paper",
                  "&:hover": { transform: "translateY(-3px)" },
                  transition: "transform 0.2s",
                }}
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download Resume">
              <IconButton
                color="primary"
                size="large"
                onClick={handleDownloadResume}
                sx={{
                  bgcolor: "background.paper",
                  "&:hover": { transform: "translateY(-3px)" },
                  transition: "transform 0.2s",
                }}
              >
                <Download />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email Me">
              <IconButton
                color="primary"
                size="large"
                sx={{
                  bgcolor: "background.paper",
                  "&:hover": { transform: "translateY(-3px)" },
                  transition: "transform 0.2s",
                }}
              >
                <Email />
              </IconButton>
            </Tooltip>
            <Tooltip title="Location">
              <IconButton
                color="primary"
                size="large"
                sx={{
                  bgcolor: "background.paper",
                  "&:hover": { transform: "translateY(-3px)" },
                  transition: "transform 0.2s",
                }}
              >
                <LocationOn />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

