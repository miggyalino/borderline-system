/*
  Warnings:

  - Added the required column `contactPersonEmail` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPersonName` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPersonNumber` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `BookingMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "contactPersonEmail" TEXT NOT NULL,
ADD COLUMN     "contactPersonName" TEXT NOT NULL,
ADD COLUMN     "contactPersonNumber" TEXT NOT NULL,
ADD COLUMN     "quotation" TEXT,
ALTER COLUMN "bookingDate" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "BookingMember" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TourDay" (
    "tourDayId" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "dayDescription" TEXT NOT NULL,

    CONSTRAINT "TourDay_pkey" PRIMARY KEY ("tourDayId")
);

-- CreateTable
CREATE TABLE "DayItinerary" (
    "dayItineraryId" SERIAL NOT NULL,
    "tourDayId" INTEGER NOT NULL,
    "itinerary" TEXT NOT NULL,

    CONSTRAINT "DayItinerary_pkey" PRIMARY KEY ("dayItineraryId")
);

-- AddForeignKey
ALTER TABLE "TourDay" ADD CONSTRAINT "TourDay_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("tourId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DayItinerary" ADD CONSTRAINT "DayItinerary_tourDayId_fkey" FOREIGN KEY ("tourDayId") REFERENCES "TourDay"("tourDayId") ON DELETE RESTRICT ON UPDATE CASCADE;
