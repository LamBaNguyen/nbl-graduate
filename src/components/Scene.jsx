import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FallingText from "./FallingText";
import GalaxyBackground from "./GalaxyBackground";

export default function Scene() {
  const messages = [
    "Dự lễ tốt nghiệp Nguyễn Bá Lâm",
    "Thời gian: 8h - 10h",
    "Ngày: 31/07/2025",
    "Địa điểm: Hội trường A",
    "Rất vui khi bạn đến dự lễ",
    "Thêm bạn thêm vui!",
    "Hãy cùng lưu giữ khoảnh khắc đáng nhớ!",
  ];

  const leftTexts = [], rightTexts = [];
  for (let i = 0; i < 30; i++) {
    leftTexts.push(messages[Math.floor(Math.random() * messages.length)]);
    rightTexts.push(messages[Math.floor(Math.random() * messages.length)]);
  }

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} />
      <GalaxyBackground />
      {/* Trái: từ -12 đến -4 */}
      {leftTexts.map((msg, i) => (
        <FallingText key={"L" + i} text={msg} xRange={[-20, -10]} />
      ))}
      {/* Phải: từ 4 đến 12 */}
      {rightTexts.map((msg, i) => (
        <FallingText key={"R" + i} text={msg} xRange={[10, 20]} />
      ))}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}
