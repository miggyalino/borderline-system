-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "destination" TEXT,
ADD COLUMN     "specialRequests" TEXT,
ADD COLUMN     "travelEndDate" TIMESTAMP(3),
ADD COLUMN     "travelStartDate" TIMESTAMP(3);
