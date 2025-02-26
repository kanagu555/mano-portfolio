"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import {
  Work,
  CalendarMonth,
  Business,
  Description,
  LocationOn,
  Close,
} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

const experiences = [
  {
    title: "Lead data Engineer",
    company: "Brillio",
    location: "Bangalore, India",
    period: "2021 - Present",
    description:
      "Lead testing efforts for enterprise applications, managing a team of testers and implementing automated testing solutions.",
    detailedDescription: `• Led a team of 5 QA engineers and established testing processes
    • Implemented automated testing framework using Selenium and TestNG
    • Reduced testing cycle time by 40% through process improvements
    • Collaborated with development teams to implement CI/CD pipeline
    • Conducted performance testing using JMeter
    • Managed test environments and test data
    • Mentored junior QA engineers
    • Implemented API testing strategy using Postman and RestAssured
    • Improved bug detection rate by 35%
    • Conducted regular team training sessions`,
  },
  {
    title: " Big Data Test Engineer",
    company: "Wipro Technologies",
    location: "Bangalore, India",
    period: "2013 - 2021",
    description:
      "The overall objective is to capture the change in data warehouse every day and only the latest record should be populated in Data Mart for analysis.",
    detailedDescription: `• Attending data requirements meeting, analysed the business logic and rules for every use case.
• Validating HDFS source files from SAP system and creating HQL queries for Small/Medium, Cluster and large table patterns.
• Creating JSON files to implement the business transformations, generating the HQL queries and execute Python script to create Hive/Impala tables and views.
• Validating the E2E file with ingested Hive/Impala table data based on full load and daily delta load.
• Creating test cases, results and validation sheet, performed test result walk-through meeting with use case team for approval to production migration.
• Creating workflows and scheduled jobs through Oozie.
• Modified Python code templates for openhub template tables and created HQL queries for Hive table creation.
• Ingesting data on Development, Build and Test regions with Jenkins job.
• Created production deployment jobs in Jenkins and monitoring is done through Oozie scheduler.
• Worked on analysis of critical data issue tickets raised by Use case team and provided solution.`,
  },
];

export default function Experience() {
  const theme = useTheme();
  const [selectedExp, setSelectedExp] = useState<
    (typeof experiences)[0] | null
  >(null);

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #311b92 0%, #1a237e 100%)"
            : "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
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
          Experience
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  background: theme.palette.background.paper,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[4],
                  },
                }}
                onClick={() => setSelectedExp(experience)}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Work
                      sx={{
                        fontSize: 40,
                        color: "primary.main",
                        mb: 2,
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CalendarMonth sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="subtitle2" color="text.secondary">
                      {experience.period}
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {experience.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Business sx={{ mr: 1, color: "primary.main" }} />
                    <Typography variant="subtitle1" color="primary">
                      {experience.company}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <LocationOn sx={{ mr: 1, color: "secondary.main" }} />
                    <Typography variant="subtitle2" color="secondary">
                      {experience.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Description
                      sx={{ mr: 1, mt: 0.5, color: "text.secondary" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {experience.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={!!selectedExp}
          onClose={() => setSelectedExp(null)}
          aria-labelledby="experience-modal"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "80%", md: "60%" },
              maxHeight: "90vh",
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              overflow: "auto",
            }}
          >
            {selectedExp && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography variant="h4" component="h2">
                    {selectedExp.title}
                  </Typography>
                  <IconButton
                    onClick={() => setSelectedExp(null)}
                    sx={{ color: "text.secondary" }}
                  >
                    <Close />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Business sx={{ mr: 1, color: "primary.main" }} />
                  <Typography variant="h6" color="primary">
                    {selectedExp.company}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn sx={{ mr: 1, color: "secondary.main" }} />
                  <Typography variant="subtitle1" color="secondary">
                    {selectedExp.location}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <CalendarMonth sx={{ mr: 1, color: "text.secondary" }} />
                  <Typography variant="subtitle1" color="text.secondary">
                    {selectedExp.period}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                  {selectedExp.detailedDescription}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
