"use client";

import { Grid, Typography } from "@mui/material";

import { colors } from "@/utils/colors";
import EarthSlot from "../EarthSlot/EarthSlot";

export default function About() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, color: colors.black, textAlign: "center" }}
      >
        About Me
      </Typography>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography sx={{ whiteSpace: "wrap", color: colors.grey }}>
            Hello! I am a passionate software developer from the vibrant city of
            Mangalore, India. With a strong foundation in programming and a
            knack for problem-solving, I specialize in building innovative
            solutions that blend functionality with efficiency.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} sx={{ height: 300 }}>
          <EarthSlot />
        </Grid>
      </Grid>
    </>
  );
}
