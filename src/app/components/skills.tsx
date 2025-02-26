import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import {
  Code,
  Speed,
  BugReport,
  AutoFixHigh,
  Storage,
  Architecture,
  GroupWork,
  Psychology,
  Terminal,
  DataObject,
  CloudSync,
  Assessment,
} from "@mui/icons-material";

const skills = [
  {
    name: "Manual Testing",
    icon: BugReport,
    color: "#f44336",
  },
  {
    name: "Automation Testing",
    icon: AutoFixHigh,
    color: "#2196f3",
  },
  {
    name: "Performance Testing",
    icon: Speed,
    color: "#ff9800",
  },
  {
    name: "Database Testing",
    icon: Storage,
    color: "#9c27b0",
  },
  {
    name: "Test Architecture",
    icon: Architecture,
    color: "#795548",
  },
  {
    name: "Team Leadership",
    icon: GroupWork,
    color: "#607d8b",
  },
  {
    name: "Problem Solving",
    icon: Psychology,
    color: "#e91e63",
  },
  {
    name: "Selenium",
    icon: Terminal,
    color: "#00bcd4",
  },
  {
    name: "Java",
    icon: Code,
    color: "#f44336",
  },
  {
    name: "Python",
    icon: DataObject,
    color: "#ffc107",
  },
  {
    name: "CI/CD",
    icon: CloudSync,
    color: "#3f51b5",
  },
  {
    name: "Test Analytics",
    icon: Assessment,
    color: "#009688",
  },
];

export default function Skills() {
  const theme = useTheme();

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #1a237e 0%, #311b92 100%)"
            : "linear-gradient(135deg, #bbdefb 0%, #e3f2fd 100%)",
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
          }}
        >
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    p: 3,
                    borderRadius: 2,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: theme.shadows[4],
                      "& .skill-icon": {
                        transform: "scale(1.2)",
                      },
                    },
                  }}
                >
                  <IconComponent
                    className="skill-icon"
                    sx={{
                      fontSize: 40,
                      color: skill.color,
                      mb: 2,
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
