import { Box } from "@mui/material";

import Hero from "@/components/Hero/Hero";
import SkillSet from "@/components/SkillSet/SkillSet";

export default function Home() {
  return (
    <>
      <Hero />
      <Box sx={{ mt: 2 }}>
        <SkillSet />
      </Box>
    </>
  );
}
