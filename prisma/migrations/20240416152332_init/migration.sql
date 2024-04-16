/*
  Warnings:

  - You are about to drop the column `tourItinerary` on the `Tour` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "tourItinerary";

-- CreateTable
CREATE TABLE "TourImages" (
    "tourImageId" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "TourImages_pkey" PRIMARY KEY ("tourImageId")
);

-- AddForeignKey
ALTER TABLE "TourImages" ADD CONSTRAINT "TourImages_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("tourId") ON DELETE RESTRICT ON UPDATE CASCADE;
