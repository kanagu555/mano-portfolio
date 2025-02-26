import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { useTheme } from "@mui/material/styles"
import { School } from "@mui/icons-material"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Technical University",
    period: "2012 - 2016",
    description: "Specialized in Software Engineering and Testing Methodologies",
  },
  {
    degree: "Higher Secondary Education",
    school: "City Public School",
    period: "2010 - 2012",
    description: "Science Stream with Computer Science",
  },
]

export default function Education() {
  const theme = useTheme()

  return (
    <Box
      id="education"
      sx={{
        py: 8,
        bgcolor: theme.palette.mode === "dark" ? "grey.900" : "grey.100",
      }}
    >
      <Container maxWidth="lg">
        <Typography 
        variant="h3"
        sx={{
            mb: 6,
            fontWeight: 700,
            textAlign: "center",
            color: theme.palette.mode === "dark" ? "#fff" : "#1a237e", 
          }}>
          Education
        </Typography>
        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      color: "secondary.main",
                    }}
                  >
                    <School sx={{ mr: 1 }} />
                    <Typography variant="overline" component="span">
                      {edu.period}
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {edu.school}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

