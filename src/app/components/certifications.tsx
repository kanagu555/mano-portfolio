import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import {
  VerifiedUser,
  School,
  Badge,
  CloudDone,
  OpenInNew,
} from "@mui/icons-material";

const certifications = [
  {
    title: "Scrum Fundamentals for Scrum Master and Agile Projects",
    issuer: "Udemy",
    year: "2021",
    icon: VerifiedUser,
    color: "#4caf50",
    link: "https://www.udemy.com/certificate/UC-3b121cf5-9dfa-45ca-8daa-289dbcf633d9/",
  },
  {
    title: "Certified ScrumMaster® (CSM®)",
    issuer: "Scrum Alliance, Inc.",
    year: "2021",
    icon: School,
    color: "#f44336",
    link: "https://certification.scrumalliance.org/accounts/1291139-manoprabha/certifications/1499239-csm",
  },
  {
    title: "Agile Testing Professional",
    issuer: "Scrum Alliance",
    year: "2018",
    icon: Badge,
    color: "#2196f3",
    link: "https://www.scrumalliance.org/verify",
  },
];

export default function Certifications() {
  const theme = useTheme();

  return (
    <Box
      id="certifications"
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
          Licenses & Certifications
        </Typography>
        <Grid container spacing={4}>
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[4],
                      "& .cert-icon": {
                        transform: "scale(1.2)",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <IconComponent
                        className="cert-icon"
                        sx={{
                          fontSize: 40,
                          color: cert.color,
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {cert.title}
                    </Typography>
                    <Typography color="primary" gutterBottom>
                      {cert.issuer}
                    </Typography>
                    <Typography color="text.secondary">{cert.year}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      endIcon={<OpenInNew />}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: cert.color,
                        "&:hover": {
                          backgroundColor: `${cert.color}10`,
                        },
                      }}
                    >
                      Verify Certificate
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
