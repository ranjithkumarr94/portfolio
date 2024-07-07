import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

export const metadata: Metadata = {
  title: "Ranjith Kumar",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
