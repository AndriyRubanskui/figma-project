import { useNavigate } from "react-router-dom";

import svgPaths from "../imports/svg-fklmw1hrgv";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CompanyLogo } from "./CompanyLogo";
import {
  AnimatedSection,
  AnimatedText,
  AnimatedImage,
  StaggerContainer,
  StaggerItem,
} from "./animations/AnimatedSection";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

function NavigationLinks() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row gap-6 items-start justify-start text-[14px] text-left">
      <div className="relative shrink-0">
        <p
          className="underline block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => navigate("/about-us")}
        >
          About us
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">
          Our Services
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">
          Contact Us
        </p>
      </div>
    </div>
  );
}

function MobileMenu({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  const navigate = useNavigate();

  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="flex flex-col gap-1 p-2"
        aria-label="Toggle menu"
      >
        <div
          className={`h-0.5 w-6 bg-black transition-transform ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`h-0.5 w-6 bg-black transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`h-0.5 w-6 bg-black transition-transform ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="flex flex-col gap-4">
            <p
              className="underline block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors"
              onClick={() => navigate("/about-us")}
            >
              About us
            </p>
            <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">
              Our Services
            </p>
            <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">
              Contact Us
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-start justify-between w-full relative">
      <CompanyLogo onClick={() => navigate("/")} />
      <div className="hidden md:block">
        <NavigationLinks />
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AnimatedText delay={0.2}>
        <div className="text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-[1.2] w-full">
          <h1 className="text-[48px]">
            Empowering Communities Through Safe Demining Solutions
          </h1>
        </div>
      </AnimatedText>
      <AnimatedText delay={0.4}>
        <div className="text-[16px] md:text-[18px] leading-[1.5] w-full">
          <p>
            Our humanitarian demining services ensure safe and secure
            environments for communities affected by landmines and unexploded
            ordnance. We are dedicated to restoring land and lives through
            expert removal and clearance operations.
          </p>
        </div>
      </AnimatedText>
    </div>
  );
}

function EmailSignupForm() {
  return (
    <AnimatedSection animation="fadeUp" delay={0.6}>
      <div className="w-full max-w-[513px]">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1 border border-black min-h-[48px]">
            <div className="flex items-center h-full">
              <div className="flex items-center px-3 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent outline-none text-[16px] leading-[1.5] text-gray-600"
                />
              </div>
            </div>
          </div>
          <button className="bg-black border border-black text-white px-6 py-3 text-[16px] leading-[1.5] hover:bg-gray-800 transition-colors shrink-0">
            Sign Up
          </button>
        </div>
        <div className="text-[12px] leading-[1.5] mt-4">
          <p>
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

function HeroSection() {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        <Navigation />
        <div className="mt-12 md:mt-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
            <div className="flex-1 flex flex-col gap-8">
              <HeroContent />
              <EmailSignupForm />
            </div>
            <AnimatedImage delay={0.3}>
              <div className="flex-1 w-full max-w-[600px] aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=600&fit=crop&crop=center"
                  alt="Demining operations team working in the field with safety equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedImage>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          <AnimatedSection animation="slideRight">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6 w-full">
                <div className="text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-[1.2] w-full">
                  <h2 className="text-[48px]">
                    Empowering Communities Through Safe Demining Solutions
                  </h2>
                </div>
                <div className="text-[16px] md:text-[18px] leading-[1.5] w-full">
                  <p>
                    Our humanitarian demining services ensure safe land for
                    communities affected by landmines and unexploded ordnance.
                    We are dedicated to restoring hope and safety through expert
                    removal and clearance operations.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="flex-1 w-full max-w-[600px] aspect-square relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop&crop=center"
                alt="Demining training and education for local communities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="w-16 h-16 cursor-pointer hover:scale-110 transition-transform">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 64 64"
                  >
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p229d4300}
                      fill="white"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function NewsletterSignup() {
  const navigate = useNavigate();

  return (
    <AnimatedSection animation="fadeUp">
      <div className="flex flex-col gap-6 w-full max-w-[500px]">
        <CompanyLogo onClick={() => navigate("/")} />
        <div className="text-[16px] leading-[1.5]">
          <p>
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 border border-black min-h-[48px]">
              <div className="flex items-center h-full">
                <div className="flex items-center px-3 w-full">
                  <input
                    type="email"
                    placeholder="Your email here"
                    className="flex-1 bg-transparent outline-none text-[16px] leading-[1.5] text-gray-600"
                  />
                </div>
              </div>
            </div>
            <button className="border border-black text-black px-6 py-3 text-[16px] leading-[1.5] hover:bg-gray-100 transition-colors shrink-0">
              Join
            </button>
          </div>
          <div className="text-[12px] leading-[1.5]">
            <p>
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FooterLinks() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "About Us", action: () => navigate("/about-us") },
    { name: "Our Services", action: () => {} },
    { name: "Contact Us", action: () => {} },
    { name: "Blog News", action: () => {} },
    { name: "Investors Info", action: () => {} },
  ];

  const connectLinks = [
    "Careers",
    "Partnerships",
    "FAQs",
    "Support",
    "Feedback",
  ];

  const socialLinks = [
    { name: "Facebook", icon: svgPaths.p2ed8fe00 },
    { name: "Instagram", icon: svgPaths.p3f3f55f0 },
    { name: "X", icon: svgPaths.p214d7500 },
    { name: "LinkedIn", icon: svgPaths.p2b170900 },
    { name: "YouTube", icon: svgPaths.p35f23f00 },
  ];

  return (
    <StaggerContainer className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      <StaggerItem>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-semibold leading-[1.5]">
            Quick Links
          </h3>
          <div className="flex flex-col">
            {quickLinks.map((link) => (
              <div key={link.name} className="py-2">
                <p
                  className="text-[14px] leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors"
                  onClick={link.action}
                >
                  {link.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-semibold leading-[1.5]">
            Connect With Us
          </h3>
          <div className="flex flex-col">
            {connectLinks.map((link) => (
              <div key={link} className="py-2">
                <p className="text-[14px] leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">
                  {link}
                </p>
              </div>
            ))}
          </div>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-semibold leading-[1.5]">
            Stay Connected
          </h3>
          <div className="flex flex-col">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                className="flex items-center gap-3 py-2 cursor-pointer hover:text-gray-600 transition-colors"
              >
                <div className="w-6 h-6">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} fill="currentColor" />
                  </svg>
                </div>
                <p className="text-[14px] leading-[1.5]">{social.name}</p>
              </div>
            ))}
          </div>
        </div>
      </StaggerItem>
    </StaggerContainer>
  );
}

function FooterBottom() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="h-px bg-black w-full"></div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-[14px] leading-[1.5]">
          <p>© 2024 Numo. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-[14px]">
          <p className="underline cursor-pointer hover:text-gray-600 transition-colors">
            Privacy Policy
          </p>
          <p className="underline cursor-pointer hover:text-gray-600 transition-colors">
            Terms of Use
          </p>
          <p className="underline cursor-pointer hover:text-gray-600 transition-colors">
            Cookie Settings
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20 w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            <NewsletterSignup />
            <FooterLinks />
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default function DeminingSolutionsPage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <HeroSection />
      <VideoSection />
      <Footer />
    </div>
  );
}
