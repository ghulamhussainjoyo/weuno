"use client";
import { cn } from "../../lib/utils";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import MobileNavbarSheet, {
  Route,
} from "@/rda/components/nav/MobileNavbarSheet";
import { routes } from "@/rda/constants/nav-routes";

interface MobileNavProps {
  className?: string;
}
const MobileNav: FC<MobileNavProps> = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      if (body) {
        body.style.overflow = "hidden";
      }
    } else {
      body!.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className={cn("nav-container relative", className)}>
      <MobileNavbarSheet
        routes={routes}
        style={{
          zIndex: -5,
          paddingTop: navRef.current?.clientHeight,
          // marginTop: navRef.current?.clientHeight,
          // height: `calc(100dvh - ${navRef.current?.clientHeight}px)`,
          height: `calc(100dvh)`,
          display: isOpen ? "block" : "none",
        }}
      />
      <nav
        ref={navRef}
        className={cn(
          "z-40 px-4 pl-8 pt-5 pb-7 flex justify-between items-center navbar",
          {
            "border-b-[0.5px] border-b-white": isOpen,
            // "bg-mobile-gradient": isOpen,
          }
        )}
      >
        <Image
          alt="logo"
          width={189}
          height={33}
          // className="bg-red-400"
          src={"/assets/images/app-logo-2x.png"}
        />
        <Hamburger
          rounded
          // size={23}
          color="#ad8749"
          toggled={isOpen}
          toggle={setOpen}
        />
      </nav>
    </div>
  );
};

export default MobileNav;
