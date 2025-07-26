// src/app/types.ts
export type Incident = {
  id: string;
  type: string;
  tsStart: Date;
  tsEnd: Date;
  thumbnailUrl: string;
  resolved: boolean;
  camera: { name: string; location: string };
};
