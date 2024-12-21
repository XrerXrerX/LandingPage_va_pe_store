/** @format */

"use client";
import { useEffect, useState } from "react";

export default function DateDisplay() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("id-ID", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="text-primary border-r border-gray-600  pr-4 py-4">
      {formatDate(date)}
    </div>
  );
}
