// import { FC } from "react";

// interface TicketCardProps {
//   imgSrc?: string;
//   className?: string;
// }

// const CuisineCard: FC<TicketCardProps> = ({ className }) => {
//   return (
//     <div
//       className="relative shrink-0 rounded-[38px] p-2 pb-5 space-y-3 shadow-2xl "
//       style={{
//         backdropFilter: "blur(30px)",
//         WebkitBackdropFilter: "blur(30px)",
//         boxShadow: "0px 0px 10px 10px #0f150041",
//       }}
//     >
//       <img
//         src="/assets/images/cuicine-img.png"
//         className=" w-full h-[200px] rounded-tl-[25px] rounded-tr-[25px]"
//       />
//       <div className="w-full flex justify-between items-center pr-[1.3rem] pl-[1.6rem]">
//         <div className="space-y-[0.625rem]">
//           <h5 className="text-2xl">Vida Vera</h5>
//           <p className="pr-5 pl-3 py-1 bg-gold rounded-[1.4rem] text-xs tracking-widest">
//             100 suer guest
//           </p>
//         </div>
//         <img className="w-6 h-[1.12rem]" src="/assets/svgs/arrow-right.svg" />
//       </div>
//     </div>
//   );
// };

// export default CuisineCard;

import { FC } from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/rda/lib/utils";

interface TicketCardProps {
  imgSrc?: string;
  className?: string;
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  // display: "swap",
});

const CuisineCard: FC<TicketCardProps> = ({ className }) => {
  return (
    <div
      style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" }}
      className="relative shrink-0 rounded-[38px] p-2 space-y-3 lg:p-2.5 pb-5 hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-green"
    >
      <img
        src="/assets/images/cuicine-img.png"
        alt="Cuisine"
        // className="w-full h-[200px] lg:h-[304px] rounded-tl-[25px] rounded-tr-[25px] lg:rounded-tl-[32px] lg:rounded-tr-[32px]  object-cover"
      />
      <div className="w-full flex justify-between items-center px-6  md:pb-12 ">
        <div className="flex flex-col  items-start space-y-2.5">
          <h5
            className={cn(
              "text-xl md:text-2xl font-medium",
              playfair.className
            )}
          >
            Vida Vera
          </h5>
          <div className="inline-block">
            <p className="px-5 py-1 bg-gold rounded-full text-xs tracking-widest">
              100 super guest
            </p>
          </div>
        </div>
        <img
          className="w-6 h-[1.12rem] transition-transform duration-300 group-hover:translate-x-1"
          src="/assets/svgs/arrow-right.svg"
          alt="Arrow right"
        />
      </div>
    </div>
  );
};

export default CuisineCard;
