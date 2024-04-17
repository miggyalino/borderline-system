/*
  Warnings:

  - You are about to drop the column `tourDates` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `tourExclusions` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `tourInclusions` on the `Tour` table. All the data in the column will be lost.
  - Added the required column `tourEndDate` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tourStartDate` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "status" SET DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "tourDates",
DROP COLUMN "tourExclusions",
DROP COLUMN "tourInclusions",
ADD COLUMN     "tourEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tourStartDate" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "countryId" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "countryName" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("countryId")
);

-- CreateTable
CREATE TABLE "TourInclusions" (
    "tourInclusionId" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "inclusion" TEXT NOT NULL,

    CONSTRAINT "TourInclusions_pkey" PRIMARY KEY ("tourInclusionId")
);

-- CreateTable
CREATE TABLE "TourExclusions" (
    "tourExclusionId" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "exclusion" TEXT NOT NULL,

    CONSTRAINT "TourExclusions_pkey" PRIMARY KEY ("tourExclusionId")
);

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("tourId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourInclusions" ADD CONSTRAINT "TourInclusions_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("tourId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourExclusions" ADD CONSTRAINT "TourExclusions_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("tourId") ON DELETE RESTRICT ON UPDATE CASCADE;
