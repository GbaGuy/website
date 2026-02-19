import AppMockup from "@/components/AppMockup";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppMockup />
        <div className="divider" />
        <Features />
      </main>
    </>
  );
}
