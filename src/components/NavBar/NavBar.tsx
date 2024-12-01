import { Box, Stack, Typography } from "@mui/material";

import NavLinks from "@/components/NavLinks/NavLinks";
import { colors } from "@/utils/colors";

export default function NavBar() {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: "center", justifyContent: "space-around" }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: colors.black }}>
          Ranjith
          <span style={{ color: colors.purple, fontSize: 30 }}>.</span>
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <NavLinks />
      </Stack>
    </Stack>
  );
}
