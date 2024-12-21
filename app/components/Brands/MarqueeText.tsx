/** @format */

"use client";

export default function MarqueeText() {
  const text = "BEST VAPE STORE IN BANDUNG • ";
  // Repeat the text to ensure smooth looping
  const repeatedText = text.repeat(10);

  return (
    <div className="text-pink-500 py-2 bg-white overflow-hidden whitespace-nowrap text-4xl font-extrabold border-y-[1px] border-black">
      <div className="inline-block animate-marquee2" aria-hidden="true">
        {repeatedText.split("•").map((segment, index) => (
          <span key={index}>
            {segment}
            <span className="text-black">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
