import { Box, Grid } from "@mui/material";

const skills = [
  {
    name: "react",
  },
  {
    name: "ts",
  },
  {
    name: "js",
  },
  {
    name: "materialui",
  },
  {
    name: "html",
  },
  {
    name: "css",
  },
  {
    name: "nodejs",
  },
  {
    name: "express",
  },
  {
    name: "java",
  },
  {
    name: "spring",
  },
  {
    name: "postgres",
  },
  {
    name: "pnpm",
  },
  {
    name: "git",
  },
  {
    name: "docker",
  },
  {
    name: "kubernetes",
  },
  {
    name: "githubactions",
  },
  {
    name: "postman",
  },
  {
    name: "vscode",
  },
];

export default function SkillIcons() {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center" }}
      gap={4}
    >
      {" "}
      {skills.map((skill) => (
        <Grid
          item
          lg={2}
          key={skill.name}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              ":hover": {
                rotate: "360deg",
              },
              transition: "rotate 0.5s ease-out",
            }}
          >
            <a href="https://skillicons.dev">
              <img
                src={`https://skillicons.dev/icons?i=${skill.name}&theme=light`}
                style={{ height: 70, width: 70 }}
                alt="skill"
              />
            </a>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
