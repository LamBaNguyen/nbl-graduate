import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FloatingText({ text, radius = 5 }) {
  const groupRef = useRef();
  useFrame((state) => {
    groupRef.current.rotation.y += 0.002;
  });

  const letters = text.split("");
  return (
    <group ref={groupRef}>
      {letters.map((char, i) => {
        const angle = (i / letters.length) * Math.PI * 2;
        return (
          <Text
            key={i}
            position={[
              Math.cos(angle) * radius,
              0,
              Math.sin(angle) * radius,
            ]}
            rotation={[0, -angle, 0]}
            fontSize={0.7}
            color="#FFD700"
          >
            {char}
          </Text>
        );
      })}
    </group>
  );
}
