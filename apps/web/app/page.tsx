import Header from "../components/Header";
import Hero from "../components/home/Hero";
import CategorySection from "../components/home/CategorySection";
import TrendingSection from "../components/home/TrendingSection";
import FeaturesSection from "../components/home/FeaturesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <TrendingSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
