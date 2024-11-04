import { FC, forwardRef } from "react";
import { cn } from "@/rda/lib/utils";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

interface NavbarProps {
  className?: string;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ className }, ref) => {
  return (
    <header className={cn("w-full", className)} ref={ref}>
      <DesktopNav className="hidden md:block" />
      <MobileNav className="md:hidden" />
    </header>
  );
});

export default Navbar;
