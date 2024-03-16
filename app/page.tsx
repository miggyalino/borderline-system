import About from "@/components/About";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import TourPackages from "@/components/TourPackages";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-100">
      <Hero />
      <About />
      <HowTo />
      <TourPackages />
      <CustomerTestimonials />
    </main>
  );
}
