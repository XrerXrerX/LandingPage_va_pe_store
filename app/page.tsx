/** @format */

"use client";
import TopBanner from "./components/TopBanner/TopBanner";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Benefits from "./components/Benefits/Benefits";
import Catalog from "./components/Catalog/Catalog";
import Trending from "./components/Trending/Trending";
import News from "./components/News/News";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-custom">
      <div id="hero" className="section">
        <TopBanner />
      </div>

      <Header />
      <Hero />
      <Categories />
      <div id="benefit" className="section">
        <Benefits />
      </div>
      <div id="catalog" className="section">
        <Catalog />
      </div>

      <div id="trending" className="section">
        <Trending />
      </div>
      <div id="news" className="section">
        <News />
      </div>

      <Brands />
      <Footer />
    </main>
  );
}
