import Image from "next/image";

export default function IncidentHeader({
  unresolvedLength,
  resolvedLength,
}: {
  unresolvedLength: number;
  resolvedLength: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg mb-2 flex items-center gap-3">
        <Image
          src={"./unresolved-incident.svg"}
          alt="Unresolved Incidents"
          height={24}
          width={24}
        />
        {unresolvedLength} Unresolved Incidents
      </h1>
      <div className="flex items-center ">
        <div className="flex items-center relative right-[-4px]">
          <Image src={"./door.svg"} alt="Door Icon" height={20} width={20} />
          <Image
            src={"./plus.svg"}
            alt="Plus Icon"
            height={20}
            width={20}
            className="relative left-[-4px]"
          />
          <Image
            src={"./user-search.svg"}
            alt="Door Icon"
            height={20}
            width={20}
            className="relative left-[-8px]"
          />
        </div>
        <div className=" flex items-center gap-1 border py-[2px] pr-[8px] pl-[6px] rounded-full border-[#404040]">
          <svg
            width="18px"
            height="18px"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#22C55E"
            strokeWidth="0.00025"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.2"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.03033 11.4697C4.73744 11.1768 4.26256 11.1768 3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L5.03033 11.4697ZM8.5 16L7.96967 16.5303C8.26256 16.8232 8.73744 16.8232 9.03033 16.5303L8.5 16ZM17.0303 8.53033C17.3232 8.23744 17.3232 7.76256 17.0303 7.46967C16.7374 7.17678 16.2626 7.17678 15.9697 7.46967L17.0303 8.53033ZM9.03033 11.4697C8.73744 11.1768 8.26256 11.1768 7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L9.03033 11.4697ZM12.5 16L11.9697 16.5303C12.2626 16.8232 12.7374 16.8232 13.0303 16.5303L12.5 16ZM21.0303 8.53033C21.3232 8.23744 21.3232 7.76256 21.0303 7.46967C20.7374 7.17678 20.2626 7.17678 19.9697 7.46967L21.0303 8.53033ZM3.96967 12.5303L7.96967 16.5303L9.03033 15.4697L5.03033 11.4697L3.96967 12.5303ZM9.03033 16.5303L17.0303 8.53033L15.9697 7.46967L7.96967 15.4697L9.03033 16.5303ZM7.96967 12.5303L11.9697 16.5303L13.0303 15.4697L9.03033 11.4697L7.96967 12.5303ZM13.0303 16.5303L21.0303 8.53033L19.9697 7.46967L11.9697 15.4697L13.0303 16.5303Z"
                fill="#22C55E"
              ></path>{" "}
            </g>
          </svg>
          <p className="text-xs font-light">
            {resolvedLength} incidents resolved
          </p>
        </div>
      </div>
    </div>
  );
}
