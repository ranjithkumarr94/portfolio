import { Box, Link, Stack, Typography } from "@mui/material";

import NavLinks from "../NavLinks/NavLinks";

export default function NavBar() {
  return (
    <Box>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-around" }}
      >
        <Box>
          <Typography variant="h3">
            Ranjith<span style={{ color: "purple", fontSize: 30 }}>.</span>
          </Typography>
        </Box>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <NavLinks />
        </Stack>
      </Stack>
    </Box>
  );
}
