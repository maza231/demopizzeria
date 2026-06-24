import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ReservationForm from "@/components/ReservationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <ReservationForm />
      </main>
      <Footer />
    </>
  );
}
