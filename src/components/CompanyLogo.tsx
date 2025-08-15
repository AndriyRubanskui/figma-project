import svgPaths from "../imports/svg-fklmw1hrgv";

interface CompanyLogoProps {
  onClick?: () => void;
  className?: string;
}

export function CompanyLogo({ onClick, className = "" }: CompanyLogoProps) {
  return (
    <div
      className={`h-9 w-[84px] relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={onClick}
    >
      <div className="absolute h-9 w-[70px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg className="w-full h-full" fill="none" viewBox="0 0 70 36">
          <g clipPath="url(#clip0_1_470)">
            <path d={svgPaths.p2a3a6680} fill="black" />
            <path d={svgPaths.p611b180} fill="black" />
            <path d={svgPaths.pf19e700} fill="black" />
            <path d={svgPaths.p3342b000} fill="black" />
            <path
              clipRule="evenodd"
              d={svgPaths.p16e9bf00}
              fill="black"
              fillRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_470">
              <rect fill="white" height="36" width="70" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
