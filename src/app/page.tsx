import { Box } from "@mui/material";

import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import SkillSet from "@/components/SkillSet/SkillSet";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Box sx={{ mt: 2 }}>
        <SkillSet />
      </Box>
    </>
  );
}
