/** @format */

"use client";

export default function MarqueeText() {
  const text = " BEST VAPE STORE IN BANDUNG • ";
  const repeatedText = text.repeat(12); // Ulangi teks agar cukup panjang

  return (
    <div className="marquee-container border-y-2 border-pink-400">
      {/* Konten utama marquee */}
      <div className="marquee-content my-4">
        {repeatedText.split("•").map((segment, index) => (
          <span
            key={`main-${index}`}
            className="text-pink-500 text-4xl font-extrabold"
          >
            {segment}
            <span className="text-black">•</span>
          </span>
        ))}
      </div>

      {/* Duplikasi konten untuk looping mulus */}
      <div className="marquee-content">
        {repeatedText.split("•").map((segment, index) => (
          <span
            key={`duplicate-${index}`}
            className="text-pink-500 text-4xl font-extrabold"
          >
            <span className="text-black">•</span>

            {segment}
          </span>
        ))}
      </div>
    </div>
  );
}
