-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Booking" (
    "bookingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("bookingId")
);

-- CreateTable
CREATE TABLE "Service" (
    "serviceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("serviceId")
);

-- CreateTable
CREATE TABLE "BookingMember" (
    "memberId" SERIAL NOT NULL,
    "bookingId" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "contactNumber" TEXT NOT NULL,

    CONSTRAINT "BookingMember_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "BookingMemberRequirements" (
    "requirementId" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "requirement" TEXT NOT NULL,

    CONSTRAINT "BookingMemberRequirements_pkey" PRIMARY KEY ("requirementId")
);

-- CreateTable
CREATE TABLE "Tour" (
    "tourId" SERIAL NOT NULL,
    "tourName" TEXT NOT NULL,
    "tourDates" TEXT NOT NULL,
    "tourItinerary" TEXT NOT NULL,
    "tourInclusions" TEXT NOT NULL,
    "tourExclusions" TEXT NOT NULL,
    "tourContinent" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("tourId")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("serviceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingMember" ADD CONSTRAINT "BookingMember_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("bookingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingMemberRequirements" ADD CONSTRAINT "BookingMemberRequirements_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "BookingMember"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
