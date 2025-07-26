import { PrismaClient, IncidentType } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.camera.createMany({
    data: [
      { id: "c1", name: "Shop Floor Camera A", location: "Shop Floor" },
      { id: "c2", name: "Vault Camera", location: "Vault" },
      { id: "c3", name: "Entrance Camera", location: "Entrance" },
    ],
    skipDuplicates: true,
  });

  const incidents = Array.from({ length: 12 }, (_, i) => {
    const start = new Date();
    start.setHours(23 - i * 2, 0, 0, 0);
    const end = new Date(start.getTime() + 2 * 60 * 1000);
    const types = [
      IncidentType.UnauthorisedAccess,
      IncidentType.FaceRecognised,
      IncidentType.GunThreat,
      IncidentType.TrafficCongestion,
    ];

    return {
      cameraId: `c${(i % 3) + 1}`,
      type: types[i % 4],
      tsStart: start,
      tsEnd: end,
      thumbnailUrl: `thumb${i + 1}.png`,
      resolved: i < 4,
    };
  });

  await prisma.incident.createMany({ data: incidents });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
