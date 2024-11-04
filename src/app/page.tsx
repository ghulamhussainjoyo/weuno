import { Playfair_Display } from "next/font/google";
import CuisineCard from "@/rda/components/card/CuisineCard";
import TicketCard from "@/rda/components/card/TicketCard";
import Footer from "@/rda/components/footer/footer";
import { Fragment } from "react";
import { cn } from "@/rda/lib/utils";
import HeroDesktop from "@/rda/components/home/HeroDesktop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  // display: "swap",
});

export default function Page() {
  return (
    <Fragment>
      {/* this is ghulam hussain */}
      {/* <HeroMobile className="" /> */}
      <HeroDesktop className="" />
      {/*  */}
      <div className="relative bg-mobile-gradient md:bg-desktop-gradient text-white">
        <div className="flex justify-center">
          {/* MALL OF ENDLESS */}
          <div className="px-5 max-w-5xl">
            <div className="py-10 text-center  space-y-[0.8rem]">
              <h1 className={cn("text-5xl", playfair.className)}>
                Mall of: Endless Possibilities
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                blanditiis nulla expedita recusandae. Laboriosam eos fugit ipsam
                nisi dolor voluptate consequatur consequuntur qui magni pariatur
                nobis voluptates dolore, molestiae porro.
              </p>

              <img
                alt="mall-of-image"
                className="w-full h-full box-border"
                src="/assets/images/mall-of-image@2x.png"
                style={{ marginTop: 44 }}
              />
            </div>

            {/* CARD */}
            <div
              className="w-full rounded-[25px] px-8 py-9 bg-[#49610c] text-white"
              style={{
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
              }}
            >
              <h6 className="">25 SR/GUEST</h6>
              <h1 className={cn("mt-5 text-3xl", playfair.className)}>
                Get Your General Access Ticket
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                exercitationem velit quos dicta sit recusandae suscipit? Animi,
                laborum perspiciatis labore natus est ad debitis at porro
                officiis nostrum dolore reiciendis!
              </p>
            </div>
          </div>
        </div>

        <div className="md:pl-12 lg:pl-28 md:mb-32 ">
          {/* BOOK GENERAL ACCESS  */}
          <div className="px-5 pt-12 pb-14 lg:max-w-2xl lg:mt-24">
            <h1 className={cn("text-4xl lg:text-5xl", playfair.className)}>
              Book General Access ticket and enjoy the attractions for free
            </h1>
            <button
              style={{ marginTop: 44 }}
              className="flex justify-between items-center px-5 space-x-20 py-[14px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] rounded-[16px]"
            >
              <span>Book General Access Ticket</span>
              <img
                src={"/assets/svgs/arrow-right.svg"}
                alt="chevron-down"
                className="w-5 h-5"
              />
            </button>
          </div>
          {/*  */}
          {/* <div className="flex itemce overflow-x-auto snap-x snap-mandatory pl-5 gap-x-3 no-scrollbar"> */}
          <div className="flex overflow-x-auto snap-x snap-mandatory pl-5 gap-x-3 no-scrollbar">
            {/* <div className="flex"> */}
            {Array.from({ length: 6 }).map((item, index) => (
              <TicketCard
                className={cn({
                  "scale-75 md:-mx-8": index % 2 === 1,
                })}
              />
            ))}
          </div>
        </div>

        {/*  */}
        {/* <div className="px-5 mt-[3.5rem] border-b border-b-white/50"> */}
        <div className="mt-[3.5rem] border-b border-b-white/50">
          {/* Experience the finest cuisine  */}
          <div className="px-5 flex justify-center">
            <div className="w-full max-w-6xl text-center">
              <div className="flex justify-center">
                <div className="max-w-3xl">
                  <h1
                    className={cn("mb-8 md:mb-5 text-4xl", playfair.className)}
                  >
                    Experience the finest cuisine
                  </h1>

                  <p className="mb-[70px] hidden md:block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    sed, veniam, quas quam dolore illo consequatur voluptates,
                    tempora ipsum at minus natus id quos ab dolorem eius
                    doloribus deleniti eos.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-7">
                <CuisineCard />
                <CuisineCard />
                <CuisineCard />
                <CuisineCard />
              </div>
            </div>
          </div>
          {/* experience the finest cuisine  */}
          <div className=" pt-12  md:flex md:items-center md:pl-10 lg:pl-20">
            <div className="px-5 mb-14">
              <h1 className={cn("text-4xl mr-10", playfair.className)}>
                Create your <br className="hidden md:block" /> experience as you
                like
              </h1>
              <button
                style={{ marginTop: 44 }}
                className="flex justify-between items-center px-5 space-x-20 py-[14px] 
                bg-gradient-to-b from-[#AD8749] to-[#DCBB75] rounded-[16px]"
              >
                <span>Book Ticket</span>
                <img
                  src={"/assets/svgs/arrow-right.svg"}
                  alt="chevron-down"
                  className="w-5 h-5"
                />
              </button>
            </div>

            {/*  */}
            <div className="flex overflow-x-auto snap-x snap-mandatory pl-5 gap-x-3 no-scrollbar">
              {Array.from({ length: 6 }).map((item, index) => (
                <TicketCard
                  className={cn({
                    "": index % 2 === 1,
                  })}
                />
              ))}
            </div>
          </div>
          {/*  */}
          <div className="px-5 md:px-10 lg:px-20 flex flex-col md:flex-row ">
            <div className="mt-[7.25rem]">
              <h6 className="uppercase tracking-widest">
                experience the groves
              </h6>
              <h2 className={cn("mt-6 text-5xl", playfair.className)}>
                Find your place
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                provident quaerat officia sunt tenetur quidem similique
                voluptatibus pariatur
              </p>

              <button
                style={{ marginTop: 24 }}
                className="flex justify-between items-center px-5 space-x-20 py-[14px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] rounded-[16px]"
              >
                <span>Open the Map</span>
                <img
                  src={"/assets/svgs/arrow-right.svg"}
                  alt="chevron-down"
                  className="w-5 h-5"
                />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/images/map.png" className="w-full h-full" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}
