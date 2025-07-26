import Image from "next/image";

export default function CameraStrip({ src }: { src: string }) {
  return (
    <div className="w-30 h-21 relative rounded-sm overflow-hidden">
      <div className="bg-[#0B0B0B] h-4 flex items-center justify-between gap-2 w-full absolute z-2 py-[3.2px] pl-[6.2px] pr-[4.8px]">
        <p className="text-[8px] text-[#D4D4D4]">Camera - 02</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
      <Image src={src} alt="Placeholder Image" fill className="object-cover" />
    </div>
  );
}
