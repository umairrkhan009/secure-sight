"use client";
import { Incident } from "@/app/types";
import { format } from "date-fns";
import Image from "next/image";
import { JSX } from "react";
import { motion } from "framer-motion";

export default function IncidentItem({
  incident,
  icon,
  onResolve,
}: {
  incident: Incident;
  icon: JSX.Element;
  onResolve: (id: string) => void;
}) {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between gap-5 py-3 h-25 rounded-lg text-white"
    >
      <div className="flex items-center justify-center w-30 h-17 rounded-xl bg-gray-700 object-cover">
        <Image
          src={`/${incident.thumbnailUrl}`}
          alt="Thumbnail"
          height={200}
          width={200}
          className="rounded-xl object-cover h-17"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p className="font-bold text-sm flex items-center gap-1">
          {icon}
          {incident.type.replace(/([a-z])([A-Z])/g, "$1 $2")}
        </p>
        <div>
          <p className="text-[10px] font-semibold flex items-center gap-1">
            <svg
              fill="#FFFFFF"
              width="10px"
              height="10px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#FFFFFF"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>cctv</title>{" "}
                <path d="M31.119 14.845c-0.116-0.314-0.346-0.563-0.639-0.702l-0.008-0.003-1.765-0.823 0.39-0.836c0.074-0.155 0.117-0.336 0.117-0.528 0-0.499-0.292-0.93-0.715-1.13l-0.008-0.003-21.254-9.911c-0.155-0.074-0.337-0.117-0.529-0.117-0.499 0-0.929 0.292-1.129 0.714l-0.003 0.008-4.589 9.842c-0.074 0.155-0.117 0.337-0.117 0.529 0 0.499 0.292 0.929 0.714 1.129l0.008 0.003 7.773 3.624-2.19 5.11h-3.926v-3.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 10c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-3.75h4.75c0.512-0 0.953-0.309 1.146-0.75l0.003-0.008 2.484-5.795 11.215 5.229c0.154 0.074 0.334 0.117 0.525 0.117 0.001 0 0.002 0 0.003 0h-0c0.498-0 0.928-0.292 1.13-0.713l0.003-0.008 0.39-0.835 1.767 0.824c0.154 0.074 0.334 0.117 0.525 0.117 0.001 0 0.002 0 0.003 0h-0c0.499-0 0.929-0.293 1.13-0.715l0.003-0.008 2.754-5.904c0.074-0.155 0.117-0.336 0.117-0.527 0-0.154-0.028-0.301-0.079-0.437l0.003 0.009zM22.77 20.133l-11.174-5.211c-0.030-0.023-0.063-0.047-0.098-0.069l-0.005-0.003c-0.029-0.013-0.060-0.009-0.090-0.019l-7.62-3.554 3.532-7.576 18.988 8.854zM26.586 19.516l-0.631-0.295 1.697-3.639 0.631 0.295z"></path>{" "}
              </g>
            </svg>
            {incident.camera.name}
          </p>
          <p className="text-[10px] font-semibold flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {format(new Date(incident.tsStart), "HH:mm")} -{" "}
            {format(new Date(incident.tsEnd), "HH:mm")} on {formattedDate}
          </p>
        </div>
      </div>
      <button
        onClick={() => onResolve(incident.id)}
        className="text-[10px] flex items-center justify-center gap-2 cursor-pointer hover:transform-all hover:gap-3 hover:duration-300 text-[#FFCC00] px-2 py-1 rounded"
      >
        Resolve
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </motion.div>
  );
}
