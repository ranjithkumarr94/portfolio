import { Grid } from "@mui/material";
import React from "react";

import HeroContent from "@/components/HeroContent/HeroContent";
import HeroImage from "@/components/HeroImage/HeroImage";

export default function Hero() {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      direction="row"
      mt={2}
      sx={{ height: "80vh" }}
      gap={8}
    >
      <Grid
        item
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
        gap={1}
      >
        <HeroContent />
      </Grid>
      <Grid
        item
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeroImage />
      </Grid>
    </Grid>
  );
}
