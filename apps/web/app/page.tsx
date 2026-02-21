import Header from "../components/Header";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import TrendingSection from "../components/TrendingSection";
import FeaturesSection from "../components/FeaturesSection";
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
