// import { cn } from "@/rda/lib/utils";
// import { FC } from "react";

// interface HomeOverlayProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const HomeOverlay: FC<HomeOverlayProps> = ({ children, className }) => {
//   return (
//     <div className={cn("relative w-full h-full", className)}>
//       <img
//         alt="mobile-hero"
//         src={"/assets/images/mobile-hero@2x.png"}
//         className="z-0 absolute top-0 left-0 w-full h-full object-fill"
//       />
//       <div className="z-0 absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-black via-white/25 to-black/15" />
//       {children}
//     </div>
//   );
// };

// export default HomeOverlay;

// HomeOverlay.tsx
import { cn } from "@/rda/lib/utils";
import { FC } from "react";

interface HomeOverlayProps {
  children: React.ReactNode;
  className?: string;
  imageSrc: string;
}

const HeroOverlay: FC<HomeOverlayProps> = ({
  children,
  className,
  imageSrc,
}) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Background container */}
      <div className="absolute inset-0">
        <img
          alt="mobile-hero"
          src={imageSrc}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/10" />
      </div>

      {/* Content container with higher z-index */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default HeroOverlay;
