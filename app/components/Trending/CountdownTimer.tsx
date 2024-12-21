/** @format */

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 5,
    hours: 18,
    minutes: 20,
    seconds: 8,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        if (newSeconds >= 0) return { ...prevTime, seconds: newSeconds };

        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0)
          return { ...prevTime, minutes: newMinutes, seconds: 59 };

        const newHours = prevTime.hours - 1;
        if (newHours >= 0)
          return { ...prevTime, hours: newHours, minutes: 59, seconds: 59 };

        const newDays = prevTime.days - 1;
        if (newDays >= 0)
          return { days: newDays, hours: 23, minutes: 59, seconds: 59 };

        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <div className="flex  flex-wrap  mt-6 relative ">
      {/* Column 1 - h3 and p */}
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <h3 className="text-base lg:text-xl font-bold mb-2">
          Check Out Sekarang!
        </h3>
        <p className="text-gray-600 mb-0">Penawaran Berakhir Pada :</p>
      </div>

      {/* Column 2 - Time units */}
      <div className="w-1/2 flex items-center gap-4 justify-around mt-4 sm:mt-0">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center">
            <motion.div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-pink-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1,
                repeat: unit.value === 0 ? 0 : Infinity,
              }}
            >
              <span className="text-xl font-bold">
                {String(unit.value).padStart(2, "0")}
              </span>
            </motion.div>
            <span className="text-sm mt-1">{unit.label}</span>{" "}
            {/* Position the label below */}
            {/* {index < timeUnits.length - 1 && (
              <span className="mx-1">:</span>
            )}{" "} */}
            {/* Only show colon between units */}
          </div>
        ))}
      </div>
    </div>
  );
}
