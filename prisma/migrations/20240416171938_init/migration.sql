-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "generatedQuotation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';
