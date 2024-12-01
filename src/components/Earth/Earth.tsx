import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function Earth() {
  const texture = useTexture("/assets/earth.jpg");
  const { camera } = useThree();

  useEffect(() => {
    const distance = 2;
    camera.position.set(0, -1, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <>
      <Sphere args={[1, 32, 32]} position={[0, -1, 0]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        target={[0, 0, 0]}
        maxDistance={2}
        minDistance={2}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 1.6}
      />
    </>
  );
}
