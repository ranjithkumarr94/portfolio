"use client";

import { Skeleton } from "@mui/material";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Earth from "../Earth/Earth";

export default function EarthSlot() {
  return (
    <Suspense
      fallback={
        <Skeleton
          variant="rectangular"
          height="100%"
          sx={{ borderRadius: "5%" }}
        />
      }
    >
      <Canvas style={{ borderRadius: "5%" }}>
        <color attach="background" args={["rgb(36, 38, 47)"]} />
        <ambientLight intensity={7} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <Earth />
      </Canvas>
    </Suspense>
  );
}
