import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"

export default function About() {
  const theme = useTheme()

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(45deg, #311b92 30%, #1a237e 90%)"
            : "linear-gradient(45deg, #e3f2fd 30%, #bbdefb 90%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            color: theme.palette.mode === "dark" ? "#fff" : "#1a237e",
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            color: theme.palette.mode === "dark" ? "#e3f2fd" : "#1a237e",
          }}
        >
          As a dedicated Testing Professional with over 6 years of experience, I specialize in ensuring software quality
          through comprehensive testing methodologies. My expertise spans across manual and automated testing, with a
          strong focus on creating efficient test frameworks and implementing CI/CD pipelines. I am passionate about
          delivering high-quality software products and continuously staying updated with the latest testing tools and
          technologies. My approach combines analytical thinking with attention to detail, making me an effective team
          leader and problem solver in the quality assurance domain.
        </Typography>
      </Container>
    </Box>
  )
}

