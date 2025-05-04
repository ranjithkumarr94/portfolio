import { Stack, Typography } from "@mui/material";
import Image from "next/image";

import { colors } from "@/utils/colors";
import dticiImg from "../../../public/assets/dtici_logo.png";

const experience = [
  {
    logo: dticiImg,
    title: "Daimler Truck Innovation Center India",
    positions: [
      {
        title: "Consultant",
        date: "Jul 2024 - Present",
      },
      {
        title: "Graduate Engineer Trainee",
        date: "Jul 2023 - Jul 2024",
      },
      {
        title: "Intern",
        date: "Feb 2024 - Jul 2024",
      },
    ],
  },
];

export default function Experience() {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 700, color: colors.black }}>
        My Experience<span style={{ color: colors.purple }}>.</span>
      </Typography>
      <Stack sx={{ mt: 4 }}>
        {experience.map((exp) => (
          <>
            <Stack
              direction="row"
              key={exp.title}
              gap={2}
              sx={{ alignItems: "center" }}
            >
              <Image
                src={exp.logo}
                height={50}
                width={100}
                alt="dtici"
                style={{ objectFit: "contain" }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: colors.black }}
              >
                {exp.title}
              </Typography>
            </Stack>
            {exp.positions.map((position) => (
              <Stack
                key={position.title}
                sx={{
                  pl: 14.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: colors.black, fontWeight: 500 }}
                >
                  {position.title}
                </Typography>
                <Typography variant="caption" sx={{ color: colors.grey }}>
                  {position.date}
                </Typography>
              </Stack>
            ))}
          </>
        ))}
      </Stack>
    </>
  );
}
