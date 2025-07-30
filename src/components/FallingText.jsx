import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function FallingText({ text, xRange = [-8, 8], zRange = [-5, 5] }) {
  const [y, setY] = useState(() => 10 + Math.random() * 15);
  const [x] = useState(() => Math.random() * (xRange[1] - xRange[0]) + xRange[0]);
  const [z] = useState(() => Math.random() * (zRange[1] - zRange[0]) + zRange[0]);
  const speed = 0.02 + Math.random() * 0.05;

  useFrame(() => {
    setY((prev) => (prev < -5 ? 10 + Math.random() * 10 : prev - speed));
  });

  return (
    <Text position={[x, y, z]} fontSize={0.5} color="#FFD700">
      {text}
    </Text>
  );
}
