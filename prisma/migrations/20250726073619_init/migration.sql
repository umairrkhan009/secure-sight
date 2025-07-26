-- CreateEnum
CREATE TYPE "IncidentType" AS ENUM ('UnauthorisedAccess', 'GunThreat', 'FaceRecognised', 'TrafficCongestion');

-- CreateTable
CREATE TABLE "Camera" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "cameraId" TEXT NOT NULL,
    "type" "IncidentType" NOT NULL,
    "tsStart" TIMESTAMP(3) NOT NULL,
    "tsEnd" TIMESTAMP(3) NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Incident_resolved_tsStart_idx" ON "Incident"("resolved", "tsStart");

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "Camera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
