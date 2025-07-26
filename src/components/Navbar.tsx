import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 h-19 text-white font-light text-xs relative">
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[725px] h-[108px] rounded-full bg-[#D0A704]/35 blur-3xl pointer-events-none z-0"></div>
      <h1 className="uppercase text-sm">
        Secure <span className="font-bold">Sight</span>
      </h1>
      <div className="flex items-center gap-6 text-xs font-bold">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={"./dashboard.svg"}
            alt="Dashboard Icon"
            width={12}
            height={12}
          />
          <a>Dashboard</a>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={"./camera.svg"}
            alt="Camera Icon"
            width={12}
            height={12}
          />

          <a>Camera</a>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={"./scenes.svg"}
            alt="Scenes Icon"
            width={12}
            height={12}
          />

          <a>Scenes</a>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={"./incidents.svg"}
            alt="Incidents Icon"
            width={12}
            height={12}
          />
          <a>Incidents</a>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={"./users.svg"} alt="Users Icon" width={12} height={12} />
          <a>Users</a>
        </div>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="h-8 w-8 relative">
          <Image
            src={"/profile.png"}
            alt="Profile Image"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="text-[#F5F5F5]">
          <p className="text-sm">Umair Khan</p>
          <p className="text-xs">umairrkhan009@gmail.com</p>
        </div>
        <ChevronDownIcon className="h-5 w-5 text-gray-600 hover:text-gray-400" />
      </div>
    </nav>
  );
}
