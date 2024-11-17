import { colors } from "@/utils/colors";
import { Box, Stack, Typography } from "@mui/material";
import SkillIcons from "../SkillIcons/SkillIcons";

export default function SkillSet() {
  return (
    <Stack sx={{ alignItems: "center" }} spacing={5}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: colors.black }}>
        My SkillSet
      </Typography>
      <SkillIcons />
    </Stack>
  );
}
