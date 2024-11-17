import { Box, Typography } from "@mui/material";
import Link from "next/link";

import { colors } from "@/utils/colors";

export default function NavLinks() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Skills",
      href: "/skills",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {navLinks.map((navLink) => (
        <Box key={navLink.name} sx={{ p: 2 }}>
          <Link
            href={navLink.href}
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                color: colors.grey,
                fontWeight: "bold",
                ":hover": {
                  color: colors.purple,
                },
              }}
            >
              {navLink.name}
            </Typography>
          </Link>
        </Box>
      ))}
    </>
  );
}
