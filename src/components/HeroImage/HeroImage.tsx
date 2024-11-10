import { Box } from "@mui/material";
import Image from "next/image";

import { colors } from "@/utils/colors";
import img from "../../../public/assets/ranjithpic.jpeg";

export default function HeroImage() {
  return (
    <Box
      sx={{
        border: `1.25px solid ${colors.black}`,
        borderRadius: "5%",
        boxShadow: "0px 0px 20px rgb(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          border: `1.25px solid ${colors.purple}`,
          transform: "rotate(20deg)",
          p: 3,
          borderRadius: "5%",
          overflow: "hidden",
          boxShadow: "0px 0px 20px rgb(110, 6, 242, 0.6)",
        }}
      >
        <Image
          src={img}
          height={250}
          width={230}
          alt="ranjith"
          style={{
            transform: "rotate(-20deg)",
          }}
        />
      </Box>
    </Box>
  );
}
