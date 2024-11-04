import { routes } from "@/rda/constants/nav-routes";
import { cn } from "@/rda/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface DesktopNavProps {
  className?: string;
}

const DesktopNav: FC<DesktopNavProps> = ({ className }) => {
  return (
    <nav className={cn("", className)}>
      {/* top  */}
      <div className="py-[22px] flex justify-between md:px-11 lg:px-24 border-b-[0.5px] border-b-white">
        <Image
          alt="logo"
          width={189}
          height={33}
          // className="bg-red-400"
          src={"/assets/images/app-logo-2x.png"}
        />
        <div className="flex gap-x-4 px-9 items-center ">
          <button className="px-[50px] py-[14px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] rounded-[16px]">
            <span>login</span>
          </button>

          <div className="flex gap-x-4">
            <Image
              src={"/assets/svgs/cheveron-down.svg"}
              width={12}
              height={18}
              alt="chevron-down"
            />
            <Image
              src={"/assets/images/england-flag-2x.png"}
              width={33}
              height={22}
              alt="chevron-down"
            />
          </div>
          <p className="text-sm text-white font-medium">English</p>
        </div>
      </div>

      <div className="py-3 flex justify-between md:px-11 lg:px-24 text-white  border-b-[0.5px] border-b-white">
        {routes?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="uppercase text-sm tracking-wider"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;
