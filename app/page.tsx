import FeaturedTours from "@/components/FeaturedTours";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-100">
      <Hero />
      <FeaturedTours />
    </main>
  );
}
