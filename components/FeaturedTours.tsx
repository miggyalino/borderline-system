import React from "react";
import TourCard from "./TourCard";

const FeaturedTours = () => {
  return (
    <section className="mt-14">
      <div className="flex flex-col gap-8 max-container padding-container">
        <p className="text-3xl font-bold">Featured Tours</p>
        <div className="flex gap-4">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
