"use client";
// import { prisma } from "@/lib/prisma";
import IncidentItem from "./IncidentItem";
import { Incident } from "@/app/types";
import Image from "next/image";
import IncidentHeader from "./IncidentHeader";
import CameraStrip from "./CameraStrip";
import { JSX, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export const IncidentIcons: Record<string, JSX.Element> = {
  UnauthorisedAccess: (
    <Image
      src={"./door-open.svg"}
      alt="Door Open Icon"
      height={16}
      width={16}
    />
  ),
  GunThreat: <Image src={"/gun.svg"} alt="Gun Icon" height={16} width={16} />,
  FaceRecognised: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#3B82F6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 5V3h4v2H5v2H3V5zm16 0V3h-4v2h2v2h2V5zM3 19v-2h2v2h2v2H3v-2zm14 0v2h4v-2h-2v-2h-2v2zM12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c2.67 0 8 1.34 8 4v1H4v-1c0-2.66 5.33-4 8-4z" />
    </svg>
  ),
  TrafficCongestion: (
    <svg
      height="16px"
      width="16px"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="#EF4444"
      style={{ fill: "#EF4444" }}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            className="st0"
            d="M494.934,227.26h-35.293l-97.828-87.586H222.961L111.48,227.26l-91.887,17.954 C8.33,246.648,0,256.205,0,267.469v69.017h60.697l0.502,0.002v-0.002h0.24c0-34.884,28.264-63.146,63.146-63.146 c34.887,0,63.148,28.262,63.148,63.146h152.102l1.258,0.002v-0.002h0.24c0-34.884,28.264-63.146,63.146-63.146 c34.885,0,63.146,28.262,63.146,63.146H512v-92.16C512,234.906,504.356,227.26,494.934,227.26z M158.818,227.076l73.631-57.842 h88.1l0.305,0.001v58.026h-91.639L158.818,227.076z M348.16,169.233h3.211l44.576,39.936v18.09H348.16V169.233z"
          ></path>{" "}
          <path
            className="st0"
            d="M404.48,300.647c-19.797,0-35.84,16.111-35.84,35.84c0,19.798,16.043,35.84,35.84,35.84 c19.73,0,35.84-16.042,35.84-35.84C440.32,316.758,424.211,300.647,404.48,300.647z"
          ></path>{" "}
          <path
            className="st0"
            d="M124.586,300.647c-19.797,0-35.84,16.111-35.84,35.84c0,19.798,16.043,35.84,35.84,35.84 c19.73,0,35.84-16.042,35.84-35.84C160.426,316.758,144.316,300.647,124.586,300.647z"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
};

export default function ContentArea() {
  const [resolved, setResolved] = useState<Incident[]>([]);
  const [unresolved, setUnresolved] = useState<Incident[]>([]);

  useEffect(() => {
    async function fetchData() {
      const resUnresolved = await fetch(`/api/incidents?resolved=false`);
      const unresolvedData = await resUnresolved.json();
      setUnresolved(unresolvedData);

      const resResolved = await fetch(`/api/incidents?resolved=true`);
      const resolvedData = await resResolved.json();
      setResolved(resolvedData);
    }

    fetchData();
  }, []);

  console.log("Resolved:", resolved.length, "Unresolved:", unresolved.length);

  async function handleResolve(id: string) {
    // Optimistically remove from UI
    setUnresolved((prev) => prev.filter((incident) => incident.id !== id));

    // Call PATCH API
    const res = await fetch(`/api/incidents/${id}/resolve`, {
      method: "PATCH",
    });

    const updatedIncident = await res.json();

    setResolved((prev) => [updatedIncident, ...prev]);
  }

  return (
    <div className="flex h-[88vh] p-6 gap-6">
      <div className="w-full relative rounded-lg h-full flex flex-col items-start justify-between p-2">
        <div className="flex items-center justify-center gap-2 h-5 w-35 z-1 p-2 rounded-md bg-[#1C1917]">
          <Image
            src={"/calender.svg"}
            alt="Calender Icon"
            height={12}
            width={12}
          />
          <span className="text-[10px] text-[#D6D3D1]">
            11/7/2025 - 03:12:37
          </span>
        </div>
        <Image
          src={"/main.png"}
          alt="Placeholder Image"
          fill
          className="object-cover rounded-lg"
        />
        <div className="flex items-end justify-between w-full z-1">
          <div className="flex items-center justify-center gap-2 h-6 w-29 p-2 rounded-md bg-[#0B0B0B]">
            <Image
              src={"/record.svg"}
              alt="Record Icon"
              height={12}
              width={12}
            />
            <span className="text-xs text-[#D4D4D4]">Camera - 01</span>
          </div>
          <div className="flex items-center gap-3">
            <CameraStrip src="/thumb2.png" />
            <CameraStrip src="/thumb3.png" />
          </div>
        </div>
      </div>
      <div className="w-full px-4 pt-3 flex-3/4 rounded-lg bg-[#131313] overflow-auto">
        <IncidentHeader
          unresolvedLength={unresolved.length}
          resolvedLength={resolved.length}
        />
        <AnimatePresence>
          {unresolved.map((inc: Incident) => (
            <IncidentItem
              key={inc.id}
              incident={inc}
              icon={IncidentIcons[inc.type]}
              onResolve={handleResolve}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
