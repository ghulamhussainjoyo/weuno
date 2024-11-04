import { cn } from "@/rda/lib/utils";
import { FC } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { socialIcons } from "@/rda/constants/social-icons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const footerLinks = [
  {
    title: "Location",
    routes: [
      {
        links: [
          {
            href: "#",
            name: "Al-Hizan Park  ",
          },
          {
            href: "#",
            name: "Al-Semairi, Yanbu Al Bahar 46455",
          },
          {
            href: "#",
            name: "Riyadh Saudi Arabia",
          },
        ],
      },
    ],
  },
  {
    title: "Working Hours",
    routes: [
      {
        links: [
          {
            href: "#",
            name: "Sun until Thurs: 400:PM Fri & Sat 2:30PM",
          },
        ],
      },
      {
        links: [
          {
            href: "#",
            name: "Gates close at: Sat unit Wed: 12:00AM Thurs & fri: 12:30AM",
          },
        ],
      },
    ],
  },
  {
    title: "Guest Service Call",
    routes: [
      {
        links: [
          {
            href: "#",
            name: "cc@thegroves-sa.com ",
          },
          {
            href: "#",
            name: "920001672",
          },
        ],
      },
      {
        links: [
          {
            href: "#",
            name: "+9230368237508",
          },
        ],
      },
    ],
  },
];

const paymentMethods = [
  {
    name: "visa icon",
    icon: "/assets/images/visa-icon.png",
  },
  {
    name: "debit icon",
    icon: "/assets/images/debit-icon.png",
  },
  {
    name: "american-express-icon",
    icon: "/assets/images/american-express-icon.png",
  },
];

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("w-full px-5 flex justify-center py-12", className)}>
      <div className="container max-w-6xl space-y-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/*  */}
          <h1
            className={cn("flex-[1] text-3xl md:text-5xl ", playfair.className)}
          >
            Join us for an unforgettable experience
          </h1>
          {/*  */}
          <div className="flex-1 md:flex md:justify-end">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest font-medium">
                DOWNLOAD THE GROVE APP
              </p>
              <div className="flex gap-x-6">
                <div className="flex-1 md:flex-auto">
                  <img
                    src="/assets/images/app-store.png"
                    alt="Download on App Store"
                    className=" md:w-36 md:h-12 object-contain hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="flex-1 md:flex-auto">
                  <img
                    src="/assets/images/play-store.png"
                    alt="Get it on Google Play"
                    className=" md:w-36 md:h-12 object-contain hover:opacity-90 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {footerLinks.map((section, sectionIndex) => (
            <div key={`${section.title}-${sectionIndex}`} className="space-y-6">
              <h2 className="text-sm font-semibold tracking-widest uppercase">
                {section.title}
              </h2>
              <nav aria-label={section.title}>
                <ul className="space-y-4">
                  {section.routes.map((route, routeIndex) => (
                    <li key={`route-${routeIndex}`} className="space-y-0">
                      {route.links.map((link, linkIndex) => (
                        <a
                          key={`link-${linkIndex}`}
                          href={link.href}
                          className="block text-sm  hover:text-gray-900 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      ))}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="flex justify-between items-center">
          <Image
            alt="logo"
            width={189}
            height={33}
            className="hidden md:block"
            src={"/assets/images/app-logo-2x.png"}
          />
          <div>
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
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row justify-between space-y-7">
          <div className="flex flex-col md:flex-row gap-x-11 space-y-7 md:space-y-0">
            <p>terms & condition</p>
            <p>Privacy Policy</p>
            <p> &copy;2023 The Grove for Entertainment</p>
          </div>
          <div className="flex items-center gap-x-3">
            {paymentMethods.map((item) => (
              <Image
                key={item.name}
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
