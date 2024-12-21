/** @format */

"use client";
// import Input from "../ui/Input";

export default function SearchBar() {
  return (
    <div className="relative 2xl:min-w-[300px] xl:min-w-[300px] lg:min-w-[300px] md:min-w-[100px] sm:min-w-[100px] xs:min-w-[80px]  bg-gray-700 rounded-md">
      <img
        src="/menu/search.png"
        alt="Search Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 "
      />
      <input
        type="text"
        placeholder="Cari Produk Apa ?"
        className="pl-10 w-full border text-white bg-gray-700 border-gray-600 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
  );
}
