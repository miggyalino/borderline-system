/*
  Warnings:

  - You are about to drop the column `requirement` on the `BookingMemberRequirements` table. All the data in the column will be lost.
  - Added the required column `requirementName` to the `BookingMemberRequirements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requirementUrl` to the `BookingMemberRequirements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookingMemberRequirements" DROP COLUMN "requirement",
ADD COLUMN     "requirementName" TEXT NOT NULL,
ADD COLUMN     "requirementUrl" TEXT NOT NULL;
