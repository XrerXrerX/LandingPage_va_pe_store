/** @format */

"use client";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterHours from "./FooterHours";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="w-11/12 mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <Image
              src="/footer/logofot.png"
              alt="Vape Shop Logo"
              width={200}
              height={200}
              className="mb-4 w-24 h-24 lg:h-32 lg:w-32"
            />
          </div>

          {/* Explore Links */}
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

          {/* Contact Links */}
          <FooterContact
            title="KONTAK"
            links={[
              { label: "Whatsapp", href: "#" },
              { label: "Tiktok", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "Facebook", href: "#" },
            ]}
          />

          {/* Operating Hours */}
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
    </footer>
  );
}
