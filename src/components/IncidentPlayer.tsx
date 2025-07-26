// src/components/IncidentPlayer.tsx
import Image from "next/image";

export default function IncidentPlayer({ src }: { src: string }) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <Image
        src={src}
        alt="Player"
        height={796}
        width={900}
        className="object-cover"
      />
    </div>
  );
}
