"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="grid grid-cols-4 gap-2 w-full bg-linear-to-b from-[#1F5ADC] to-[#3F74E8] text-white rounded-lg p-3">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-medium">{formatNumber(timeLeft.days)}</p>
        <p className="text-xs md:text-sm font-light">Days</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-medium">{formatNumber(timeLeft.hours)}</p>
        <p className="text-xs md:text-sm font-light">Hours</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-medium">{formatNumber(timeLeft.minutes)}</p>
        <p className="text-xs md:text-sm font-light">Minutes</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-medium">{formatNumber(timeLeft.seconds)}</p>
        <p className="text-xs md:text-sm font-light">Seconds</p>
      </div>
    </div>
  );
}
