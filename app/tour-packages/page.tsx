import TourCard from "@/components/TourCard";
import React from "react";

const TourPackagesPage = () => {
  return (
    <section className="max-container padding-container mt-10">
      <h1 className="font-bold text-3xl">Tour Packages</h1>
      <div>
        <TourCard />
      </div>
    </section>
  );
};

export default TourPackagesPage;
