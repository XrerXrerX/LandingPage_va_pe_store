/** @format */

"use client";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterHours from "./FooterHours";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="w-11/12 mx-auto px-4">
        {/* Mobile Layout: Logo on top, 3 columns below */}
        <div className="block sm:hidden">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <Image
              src="/footer/logofot.png"
              alt="Vape Shop Logo"
              width={200}
              height={200}
              className="w-24 h-24 lg:h-32 lg:w-32"
            />
          </div>

          {/* Links Section - 3 columns */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center">
              <FooterLinks
                title="EKSPLORE"
                links={[
                  { label: "Beranda", href: "/" },
                  { label: "Belanja", href: "/belanja" },
                  { label: "Berita", href: "/berita" },
                  { label: "E-Commerce", href: "/e-commerce" },
                  { label: "Katalog", href: "/katalog" },
                  { label: "Join Telegram", href: "/telegram" },
                ]}
              />
            </div>

            <div className="flex justify-center">
              <FooterContact
                title="KONTAK"
                links={[
                  { label: "Whatsapp", href: "#" },
                  { label: "Tiktok", href: "#" },
                  { label: "Instagram", href: "#" },
                  { label: "Facebook", href: "#" },
                ]}
              />
            </div>

            <div className="flex justify-center">
              <FooterHours
                title="JAM OPERASIONAL"
                hours={[
                  "Senin - Kamis : 09:00 - 23:00",
                  "Jumat : 12:00 - 00:00",
                  "Sabtu - Minggu Libur (Online Tetap Buka)",
                ]}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout: 4 columns */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image
              src="/footer/logofot.png"
              alt="Vape Shop Logo"
              width={200}
              height={200}
              className="mb-4 w-24 h-24 lg:h-32 lg:w-32"
            />
          </div>

          {/* Explore Links */}
          <div className="flex justify-start">
            <FooterLinks
              title="EKSPLORE"
              links={[
                { label: "Beranda", href: "/" },
                { label: "Belanja", href: "/belanja" },
                { label: "Berita", href: "/berita" },
                { label: "E-Commerce", href: "/e-commerce" },
                { label: "Katalog", href: "/katalog" },
                { label: "Join Telegram", href: "/telegram" },
              ]}
            />
          </div>

          {/* Contact Links */}
          <div className="flex justify-start">
            <FooterContact
              title="KONTAK"
              links={[
                { label: "Whatsapp", href: "#" },
                { label: "Tiktok", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
              ]}
            />
          </div>

          {/* Operating Hours */}
          <div className="flex justify-start">
            <FooterHours
              title="JAM OPERASIONAL"
              hours={[
                "Senin - Kamis : 09:00 - 23:00",
                "Jumat : 12:00 - 00:00",
                "Sabtu - Minggu Libur (Online Tetap Buka)",
              ]}
            />
          </div>
        </div>
      </div>
      {/* Powered By Section */}
      <div className="w-11/12 mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <span className="text-gray-400 text-sm">Powered by : </span>
          <div className="flex items-center space-x-2">
            <img
              src="/logo-ligal.png"
              alt="PT. Lintas Inovasi Global"
              className="h-16 w-auto"
            />
            <span className="text-gray-300 text-sm font-medium">
              PT. Lintas Inovasi Global
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-700 py-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-4">
          <p>Copyright © 2025 Vape Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
