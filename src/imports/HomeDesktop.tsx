import svgPaths from "./svg-fklmw1hrgv";
import imgPlaceholderImage from "figma:asset/f3ea38a274560e8c652c5e56b982cf618cd67aad.png";
import imgPlaceholderLightbox from "figma:asset/cfe4ab08e161479b0e2b3e9e722b2e44aa563e96.png";

function FooterLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="Footer Links"
    >
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] text-nowrap whitespace-pre">
          About us
        </p>
      </div>
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] text-nowrap whitespace-pre">
          Our Services
        </p>
      </div>
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] text-nowrap whitespace-pre">
          Contact Us
        </p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">LOGO</p>
      </div>
      <FooterLinks />
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-left w-full"
      data-name="Content"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[56px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.2]">
          Empowering Communities Through Safe Demining Solutions
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[18px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">
          Our humanitarian demining services ensure safe and secure environments
          for communities affected by landmines and unexploded ordnance. We are
          dedicated to restoring land and lives through expert removal and
          clearance operations.
        </p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Text input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-[-1px] pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[12px] relative w-full">
          <div
            className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.5]">Enter your email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-3 relative shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-[-1px] pointer-events-none"
      />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">Sign Up</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Form"
    >
      <TextInput />
      <Button />
    </div>
  );
}

function Actions() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-[513px]"
      data-name="Actions"
    >
      <Form />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">{`By clicking Sign Up you're confirming that you agree with our Terms and Conditions.`}</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Column"
    >
      <Content />
      <Actions />
    </div>
  );
}

function Component() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Component"
    >
      <Column />
      <div
        className="aspect-[600/600] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0"
        data-name="Placeholder Image"
        style={{ backgroundImage: `url('${imgPlaceholderImage}')` }}
      />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Component />
    </div>
  );
}

function Header2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-28 relative shrink-0 w-[1440px]"
      data-name="Header / 2 /"
    >
      <Row />
      <Container />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-left w-full"
      data-name="Content"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[56px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.2]">
          Empowering Communities Through Safe Demining Solutions
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[18px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">
          Our humanitarian demining services ensure safe land for communities
          affected by landmines and unexploded ordnance. We are dedicated to
          restoring hope and safety through expert removal and clearance
          operations.
        </p>
      </div>
    </div>
  );
}

function Actions1() {
  return <div className="h-[18px] shrink-0 w-[513px]" data-name="Actions" />;
}

function Column1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Column"
    >
      <Content1 />
      <Actions1 />
    </div>
  );
}

function PlayButton() {
  return (
    <div
      className="absolute left-1/2 size-16 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Play Button"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 64 64"
      >
        <g id="Play Button">
          <path
            clipRule="evenodd"
            d={svgPaths.p229d4300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlaceholderLightbox() {
  return (
    <div
      className="aspect-[600/600] basis-0 bg-[#00000080] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] grow min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Placeholder Lightbox"
      style={{ backgroundImage: `url('${imgPlaceholderLightbox}')` }}
    >
      <PlayButton />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-20 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Component"
    >
      <Column1 />
      <PlaceholderLightbox />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Component1 />
    </div>
  );
}

function Header4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-28 relative shrink-0 w-[1440px]"
      data-name="Header / 4 /"
    >
      <Container1 />
    </div>
  );
}

function LogoWide1() {
  return (
    <div
      className="absolute h-9 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[70px]"
      data-name="Logo-wide 1"
      style={{ left: "calc(50% - 0.333px)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 70 36"
      >
        <g clipPath="url(#clip0_1_470)" id="Logo-wide 1">
          <path
            d={svgPaths.p2a3a6680}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p611b180}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.pf19e700}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3342b000}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p16e9bf00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_470">
            <rect fill="white" height="36" width="70" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div
      className="h-9 overflow-clip relative shrink-0 w-[84px]"
      data-name="Company Logo"
    >
      <LogoWide1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Text input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-[-1px] pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[12px] relative w-full">
          <div
            className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.5]">Your email here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-3 relative shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-[-1px] pointer-events-none"
      />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">Join</p>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Form"
    >
      <TextInput1 />
      <Button1 />
    </div>
  );
}

function Actions2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Actions"
    >
      <Form1 />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">
          By subscribing, you consent to our Privacy Policy and agree to receive
          updates.
        </p>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[500px]"
      data-name="Newsletter"
    >
      <CompanyLogo />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#000000] text-[16px] text-left"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[1.5]">
          Subscribe to our newsletter for the latest updates on features and
          releases.
        </p>
      </div>
      <Actions2 />
    </div>
  );
}

function Link() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">About Us</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Our Services</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Contact Us</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Blog News</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Investors Info</p>
      </div>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Footer Links"
    >
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Column"
    >
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Quick Links</p>
      </div>
      <FooterLinks1 />
    </div>
  );
}

function Link5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Careers</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Partnerships</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">FAQs</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Support</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Feedback</p>
      </div>
    </div>
  );
}

function FooterLinks2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Footer Links"
    >
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Column3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Column"
    >
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Connect With Us</p>
      </div>
      <FooterLinks2 />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-6" data-name="Facebook">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Facebook">
          <path
            d={svgPaths.p2ed8fe00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <Facebook />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">Facebook</p>
      </div>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-6" data-name="Instagram">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Instagram">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f3f55f0}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <Instagram />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">Instagram</p>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-6" data-name="X">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="X">
          <path
            d={svgPaths.p214d7500}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <X />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">X</p>
      </div>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-6" data-name="LinkedIn">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="LinkedIn">
          <path
            clipRule="evenodd"
            d={svgPaths.p2b170900}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <LinkedIn />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">LinkedIn</p>
      </div>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-6" data-name="Youtube">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Youtube">
          <path
            d={svgPaths.p35f23f00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-0 py-2 relative shrink-0 w-full"
      data-name="Link"
    >
      <Youtube />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">YouTube</p>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Social Links"
    >
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
    </div>
  );
}

function Column4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Column"
    >
      <div
        className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5]">Stay Connected</p>
      </div>
      <SocialLinks />
    </div>
  );
}

function Links() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-10 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Links"
    >
      <Column2 />
      <Column3 />
      <Column4 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-32 h-[248px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Newsletter />
      <Links />
    </div>
  );
}

function FooterLinks3() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="Footer Links"
    >
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] text-nowrap whitespace-pre">
          Privacy Policy
        </p>
      </div>
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] text-nowrap whitespace-pre">
          Terms of Use
        </p>
      </div>
      <div
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] text-nowrap whitespace-pre">
          Cookie Settings
        </p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.5] whitespace-pre">
          © 2024 Numo. All rights reserved.
        </p>
      </div>
      <FooterLinks3 />
    </div>
  );
}

function Credits() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Credits"
    >
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div
          className="absolute bottom-0 left-0 right-0 top-[-1px]"
          style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 1280 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, black)"
              x2="1280"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Row1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Content2 />
      <Credits />
    </div>
  );
}

function Footer1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-20 relative shrink-0 w-[1440px]"
      data-name="Footer / 1 /"
    >
      <Container2 />
    </div>
  );
}

export default function HomeDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Home • Desktop"
    >
      <Header2 />
      <Header4 />
      <Footer1 />
    </div>
  );
}
