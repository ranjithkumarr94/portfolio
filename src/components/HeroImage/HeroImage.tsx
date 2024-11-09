import { Box } from "@mui/material";
import Image from "next/image";

import img from "../../../public/assets/ranjithpic.jpeg";

export default function HeroImage() {
  return (
    <Box sx={{ border: "1px solid rgb(110, 6, 242)", borderRadius: "50%" }}>
      <Image
        src={img}
        height={250}
        width={230}
        alt="ranjith"
        style={{ borderRadius: "50%", padding: 30 }}
      />
    </Box>
  );
}
