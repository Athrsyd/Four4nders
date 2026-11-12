// import CtaBanner from "./components/CtaBanner";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Workflow />
        <Portfolio />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

