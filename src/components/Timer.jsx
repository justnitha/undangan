import { useState, useEffect } from "react";

const Timer = () => {
  const [coutDown, setCountDown] = useState(8600);

  useEffect(() => {
    // Fungsi untuk mengurangi countdown setiap detik
    const interval = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1);
    }, 1000);

    // Membersihkan interval ketika komponen tidak lagi digunakan
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400); // Hitung jumlah hari (1 hari = 86400 detik)
    const hours = Math.floor((time % 86400) / 3600); // Hitung jam setelah mengurangi hari
    const minutes = Math.floor((time % 3600) / 60); // Hitung menit setelah mengurangi jam
    const seconds = time % 60; // Hitung detik setelah mengurangi menit

    return (
      <div className="flex items-center gap-10 sm:gap-28 lg:gap-28 justify-center">
        <div className="text-center text-4xl lg:text-6xl font-bold">
          <p className="font-nama">
            {`${Math.max(days, 0).toString().padStart(1, "0")}`}
          </p>
          <p className="text-base font-semibold">HARI</p>
        </div>
        <div className="text-center text-4xl lg:text-6xl font-bold">
          <p className="font-nama">
            {`${Math.max(hours, 0).toString().padStart(1, "0")}`}
          </p>
          <p className="text-base font-semibold">JAM</p>
        </div>
        <div className="text-center text-4xl lg:text-6xl font-bold">
          <p className="font-nama">
            {`${Math.max(minutes, 0).toString().padStart(1, "0")}`}
          </p>
          <p className="text-base font-semibold">MENIT</p>
        </div>
        <div className="text-center text-4xl lg:text-6xl font-bold">
          <p className="font-nama">
            {`${Math.max(seconds, 0).toString().padStart(1, "0")}`}
          </p>
          <p className="text-base font-semibold">DETIK</p>
        </div>
      </div>
    );
  };
  return (
    <div
      className="mx-auto text-center mt-20 wow bounceInUp text-white pb-16"
      data-wow-offset="200"
    >
      <h2 className="text-5xl lg:text-7xl font-nama italic">Countdown Timer</h2>
      <p className="py-1  rounded-xl  mt-5">{formatTime(coutDown)}</p>
    </div>
  );
};
export default Timer;
