import { Box, Stack, Typography } from "@mui/material";

import SkillIcons from "@/components/SkillIcons/SkillIcons";
import { colors } from "@/utils/colors";

export default function SkillSet() {
  return (
    <>
      {/* <Stack sx={{ alignItems: "center" }} spacing={5}> */}
      <Typography variant="h4" sx={{ fontWeight: 700, color: colors.black }}>
        My SkillSet<span style={{ color: colors.purple }}>.</span>
      </Typography>
      <Box sx={{ mt: 4 }}>
        <SkillIcons />
      </Box>
    </>
    // </Stack>
  );
}
