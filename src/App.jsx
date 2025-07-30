import { useState } from "react";
import Scene from "./components/Scene";
import Countdown from "./components/Countdown";
import Fireworks from "./components/Fireworks";

export default function App() {
  const [confirmed, setConfirmed] = useState(false);
  const targetDate = new Date("2025-07-31T08:00:00");

  return (
    <div className="w-screen h-screen relative">
      <Scene />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-yellow-400">
          🎓 MỜI BẠN DỰ LỄ TỐT NGHIỆP 🎓
        </h1>
        <p className="mt-2 text-xl text-gray-300">Nguyễn Bá Lâm</p>
        <p className="text-lg mt-1 text-gray-400">
          Thời gian: 8h - 10h | Ngày: 31/07/2025
        </p>
        <p className="text-lg text-gray-400">Địa điểm: Hội trường A - Trường Đại học Quy Nhơn</p>
        <Countdown targetDate={targetDate} />
        <button
          onClick={() => setConfirmed(true)}
          className="mt-6 px-6 py-2 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400"
        >
          Xác nhận tham dự
        </button>
        {confirmed && (
          <div className="mt-4 text-green-400 text-xl font-bold">
            🎉 Cảm ơn bạn! Hẹn gặp tại buổi lễ tốt nghiệp ngeaa! 🎉
          </div>
        )}
      </div>
      <footer className="absolute bottom-2 w-full text-center text-yellow-400 text-sm">
        © 2025 NBL. All rights reserved.
      </footer>

      <Fireworks trigger={confirmed} />
    </div>
  );
}
