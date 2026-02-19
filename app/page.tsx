import AppMockup from "@/components/AppMockup";
import ComparisonTable from "@/components/ComparisonTable";
import Contribute from "@/components/Contribute";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Install from "@/components/Install";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppMockup />
        <div className="divider" />
        <Features />
        <div className="divider" />
        <ComparisonTable />
        <div className="divider" />
        <Install />
        <div className="divider" />
        <Contribute />
        <div className="divider" />
        <Footer />
      </main>
    </>
  );
}
