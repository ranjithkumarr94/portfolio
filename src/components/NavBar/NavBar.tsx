import { Box, Stack, Typography } from "@mui/material";

import NavLinks from "@/components/NavLinks/NavLinks";

export default function NavBar() {
  return (
    <Box>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-around" }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: "#24262f" }}>
            Ranjith
            <span style={{ color: "rgb(110, 6, 242)", fontSize: 30 }}>.</span>
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
