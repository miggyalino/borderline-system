import About from "@/components/About";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import TourPackages from "@/components/TourPackages";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <HowTo />
      <CustomerTestimonials />
      <TourPackages />
    </main>
  );
}
