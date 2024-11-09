import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function NavLinks() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
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
                color: "#777e90",
                fontWeight: "bold",
                ":hover": {
                  color: "rgb(110, 6, 242)",
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
