"use client";
import { CSSProperties, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { socialIcons } from "@/rda/constants/social-icons";

export type Route = {
  title: string;
  href: string;
};

interface MobileNavbarSheetProps {
  routes?: Route[];
  style: CSSProperties;
}

const MobileNavbarSheet: FC<MobileNavbarSheetProps> = ({ style, routes }) => {
  return (
    <div
      // ref={navSheetRef}
      style={style}
      className=" navbar-sheet z-0 absolute top-0 left-0 w-full border-t-[0.5px] border-t-white bg-mobile-gradient"
    >
      <div className="h-full flex flex-col justify-between">
        <section className="flex-1">
          {routes?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block border-b-[0.5px] border-b-white py-5 px-7 text-white uppercase text-xs font-medium tracking-[2.6px]"
            >
              {item.title}
            </Link>
          ))}
          <div className="px-9">
            <div className="flex gap-x-4 py-11">
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
              <p className="text-sm text-white font-medium">English</p>
            </div>
            <button className="px-[50px] py-[14px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] rounded-[16px]">
              <span>login</span>
            </button>
          </div>
        </section>
        <section className="pb-[3rem] px-9">
          <div className="flex gap-x-6">
            {socialIcons.map((item) => (
              <Image
                width={12}
                height={18}
                key={item.name}
                src={item.src}
                alt="chevron-down"
                className="w-[21px] h-[21px]"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileNavbarSheet;
