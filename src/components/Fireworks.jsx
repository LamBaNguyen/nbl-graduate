import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function Fireworks({ trigger }) {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!trigger) return null;
  return <Confetti width={windowSize.width} height={windowSize.height} />;
}
