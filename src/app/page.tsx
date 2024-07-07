"use client";

import NavBar from "@/components/NavBar/NavBar";
import { ThemeProvider } from "@mui/system";
import { theme } from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}
