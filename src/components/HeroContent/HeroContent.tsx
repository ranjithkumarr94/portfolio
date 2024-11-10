import { Button, Stack, Typography } from "@mui/material";

import { colors } from "@/utils/colors";

export default function HeroContent() {
  return (
    <>
      <Stack spacing={1}>
        <Typography sx={{ whiteSpace: "wrap" }}>
          Hey, I'm Ranjith &#128075;
        </Typography>
        <Typography
          sx={{
            whiteSpace: "wrap",
            fontSize: 70,
            fontWeight: 900,
            color: colors.black,
          }}
        >
          <span style={{ color: colors.purple }}>Full</span>
          Stack Developer
        </Typography>
        <Typography sx={{ whiteSpace: "wrap", color: colors.grey }}>
          I'm a fullstack developer based in India, I thrive to build technical
          knowledge to build the future!
        </Typography>
      </Stack>
      <Stack gap={1} direction="row" mt={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: colors.purple }}
          disableElevation
          disableRipple
        >
          Resume
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: colors.black, color: colors.black }}
          disableElevation
          disableRipple
        >
          Get in Touch
        </Button>
      </Stack>
    </>
  );
}
