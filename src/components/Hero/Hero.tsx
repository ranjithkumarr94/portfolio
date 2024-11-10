import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

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
        <Stack spacing={1}>
          <Typography sx={{ whiteSpace: "wrap" }}>
            Hey, I'm Ranjith &#128075;
          </Typography>
          <Typography
            sx={{
              whiteSpace: "wrap",
              fontSize: 70,
              fontWeight: 900,
              color: "#24262f",
            }}
          >
            <span style={{ color: "rgb(110, 6, 242)" }}>Full</span>
            Stack Developer
          </Typography>
          <Typography sx={{ whiteSpace: "wrap", color: "#777e90" }}>
            I'm a fullstack developer based in India, I thrive to build
            technical knowledge to build the future!
          </Typography>
        </Stack>
        <Stack gap={1} direction="row" mt={2}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(110, 6, 242)" }}
            disableElevation
            disableRipple
          >
            Resume
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#24262f", color: "#24262f" }}
            disableElevation
            disableRipple
          >
            Get in Touch
          </Button>
        </Stack>
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
