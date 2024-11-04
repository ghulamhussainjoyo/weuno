import { cn } from "@/rda/lib/utils";
import { FC } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  // display: "swap",
});

interface TicketCardProps {
  imgSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TicketCard: FC<TicketCardProps> = ({ className, style }) => {
  return (
    <div
      style={style}
      className={cn(
        "relative shrink-0 rounded-[25px] text-center space-y-3",
        className
      )}
    >
      <img
        src="/assets/images/the-grove-img.png"
        className=" h-[18.3rem] w-[13.4rem] md:h-[32.8rem] md:w-[385px]"
      />
      <h4 className={cn("capitalize text-lg", playfair.className)}>
        Little Crazy
      </h4>
    </div>
  );
};

export default TicketCard;
