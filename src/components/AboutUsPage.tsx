import svgPaths from "../imports/svg-fklmw1hrgv";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CompanyLogo } from "./CompanyLogo";
import { AnimatedSection, AnimatedText, AnimatedImage, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";
import { AnimatedCounter } from "./animations/AnimatedCounter";
import { useState } from "react";

interface NavigationProps {
  onNavigate: (page: string) => void;
}

function NavigationLinks({ onNavigate }: NavigationProps) {
  return (
    <div className="flex flex-row gap-6 items-start justify-start text-[14px] text-left">
      <div className="relative shrink-0">
        <p 
          className="underline block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => onNavigate('about')}
        >
          About us
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">Our Services</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">Contact Us</p>
      </div>
    </div>
  );
}

function MobileMenu({ isOpen, onToggle, onNavigate }: { isOpen: boolean; onToggle: () => void; onNavigate: (page: string) => void }) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="flex flex-col gap-1 p-2"
        aria-label="Toggle menu"
      >
        <div className={`h-0.5 w-6 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`h-0.5 w-6 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`h-0.5 w-6 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="flex flex-col gap-4">
            <p 
              className="underline block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors"
              onClick={() => onNavigate('about')}
            >
              About us
            </p>
            <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">Our Services</p>
            <p className="block leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">Contact Us</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Navigation({ onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-row items-start justify-between w-full relative">
      <CompanyLogo onClick={() => onNavigate('home')} />
      <div className="hidden md:block">
        <NavigationLinks onNavigate={onNavigate} />
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onNavigate={onNavigate}
      />
    </div>
  );
}

function AboutHeroSection({ onNavigate }: NavigationProps) {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        <Navigation onNavigate={onNavigate} />
        <div className="mt-12 md:mt-20">
          <div className="flex flex-col gap-12">
            {/* Page Title */}
            <AnimatedText>
              <div className="text-center">
                <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.2]">
                  About Our Mission
                </h1>
                <p className="text-[18px] md:text-[20px] leading-[1.5] mt-6 max-w-[800px] mx-auto">
                  For over two decades, we have been at the forefront of humanitarian demining operations, 
                  working tirelessly to restore safety and hope to communities worldwide.
                </p>
              </div>
            </AnimatedText>

            {/* Large Hero Image */}
            <AnimatedImage delay={0.3}>
              <div className="w-full aspect-[16/9] max-h-[600px] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=675&fit=crop&crop=center"
                  alt="Demining team conducting safe clearance operations in a rural community"
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

function AboutContentSection() {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Our Story */}
          <AnimatedSection animation="slideRight">
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2]">Our Story</h2>
              <div className="space-y-4 text-[16px] md:text-[18px] leading-[1.6]">
                <p>
                  Founded in 2002, our organization emerged from a critical need to address the devastating impact 
                  of landmines and unexploded ordnance on civilian populations. What started as a small team of 
                  dedicated specialists has grown into one of the world's leading humanitarian demining organizations.
                </p>
                <p>
                  We have successfully cleared over 50,000 hectares of contaminated land across 23 countries, 
                  enabling the safe return of displaced families and the restoration of agricultural activities 
                  that are vital to local economies.
                </p>
                <p>
                  Our approach combines cutting-edge detection technology with time-tested manual clearance 
                  techniques, ensuring the highest safety standards while maintaining operational efficiency.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission & Values */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2]">Mission & Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[20px] font-semibold mb-2">Our Mission</h3>
                  <p className="text-[16px] md:text-[18px] leading-[1.6]">
                    To eliminate the threat of landmines and unexploded ordnance, restoring safe access to land 
                    and enabling communities to rebuild their lives with dignity and security.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-[20px] font-semibold mb-2">Core Values</h3>
                  <ul className="space-y-2 text-[16px] md:text-[18px] leading-[1.6]">
                    <li><strong>Safety First:</strong> Every operation prioritizes the protection of our teams and communities</li>
                    <li><strong>Community Partnership:</strong> We work with local populations as partners, not beneficiaries</li>
                    <li><strong>Excellence:</strong> We maintain the highest international standards in all our operations</li>
                    <li><strong>Transparency:</strong> Our work is guided by accountability and open communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Impact Section */}
        <div className="mt-20 lg:mt-28">
          <AnimatedText>
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] mb-6">Our Impact</h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] max-w-[600px] mx-auto">
                Over two decades of dedicated service has resulted in measurable change for communities worldwide.
              </p>
            </div>
          </AnimatedText>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <StaggerItem>
              <div className="text-center">
                <AnimatedCounter 
                  end={50000} 
                  suffix="+" 
                  className="text-[48px] md:text-[56px] font-bold mb-2"
                  delay={0.2}
                />
                <p className="text-[16px] md:text-[18px]">Hectares Cleared</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <AnimatedCounter 
                  end={2300000} 
                  suffix="+" 
                  className="text-[48px] md:text-[56px] font-bold mb-2"
                  delay={0.4}
                />
                <p className="text-[16px] md:text-[18px]">People Benefited</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <AnimatedCounter 
                  end={23} 
                  className="text-[48px] md:text-[56px] font-bold mb-2"
                  delay={0.6}
                />
                <p className="text-[16px] md:text-[18px]">Countries Served</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Team Section */}
        <div className="mt-20 lg:mt-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="slideRight">
              <div className="flex-1">
                <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] mb-6">Our Expert Team</h2>
                <div className="space-y-4 text-[16px] md:text-[18px] leading-[1.6]">
                  <p>
                    Our multidisciplinary team consists of explosive ordnance disposal specialists, engineers, 
                    community liaison officers, and humanitarian coordinators. Each team member brings years of 
                    field experience and specialized training to ensure safe and effective operations.
                  </p>
                  <p>
                    We invest heavily in continuous training and certification programs, ensuring our staff 
                    remain at the forefront of demining technology and best practices. Our local hiring 
                    policy also provides sustainable employment opportunities in affected communities.
                  </p>
                  <p>
                    With offices in Geneva, Nairobi, and Phnom Penh, our global network enables rapid 
                    deployment and sustained presence in regions where our expertise is most needed.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedImage delay={0.2}>
              <div className="flex-1 w-full max-w-[500px] aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=375&fit=crop&crop=center"
                  alt="Professional demining team members planning operations with local community leaders"
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

function NewsletterSignup() {
  return (
    <AnimatedSection animation="fadeUp">
      <div className="flex flex-col gap-6 w-full max-w-[500px]">
        <CompanyLogo />
        <div className="text-[16px] leading-[1.5]">
          <p>Subscribe to our newsletter for the latest updates on features and releases.</p>
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
            <p>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FooterLinks({ onNavigate }: NavigationProps) {
  const quickLinks = [
    { name: "About Us", action: () => onNavigate('about') },
    { name: "Our Services", action: () => {} },
    { name: "Contact Us", action: () => {} },
    { name: "Blog News", action: () => {} },
    { name: "Investors Info", action: () => {} }
  ];
  
  const connectLinks = [
    "Careers", "Partnerships", "FAQs", "Support", "Feedback"
  ];

  const socialLinks = [
    { name: "Facebook", icon: svgPaths.p2ed8fe00 },
    { name: "Instagram", icon: svgPaths.p3f3f55f0 },
    { name: "X", icon: svgPaths.p214d7500 },
    { name: "LinkedIn", icon: svgPaths.p2b170900 },
    { name: "YouTube", icon: svgPaths.p35f23f00 }
  ];

  return (
    <StaggerContainer className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      <StaggerItem>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-semibold leading-[1.5]">Quick Links</h3>
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
          <h3 className="text-[16px] font-semibold leading-[1.5]">Connect With Us</h3>
          <div className="flex flex-col">
            {connectLinks.map((link) => (
              <div key={link} className="py-2">
                <p className="text-[14px] leading-[1.5] cursor-pointer hover:text-gray-600 transition-colors">{link}</p>
              </div>
            ))}
          </div>
        </div>
      </StaggerItem>
      
      <StaggerItem>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-semibold leading-[1.5]">Stay Connected</h3>
          <div className="flex flex-col">
            {socialLinks.map((social) => (
              <div key={social.name} className="flex items-center gap-3 py-2 cursor-pointer hover:text-gray-600 transition-colors">
                <div className="w-6 h-6">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
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
          <p className="underline cursor-pointer hover:text-gray-600 transition-colors">Privacy Policy</p>
          <p className="underline cursor-pointer hover:text-gray-600 transition-colors">Terms of Use</p>
          <p className="underline cursor-pointer hover:text-gray-600 transition-colors">Cookie Settings</p>
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: NavigationProps) {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20 w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            <NewsletterSignup />
            <FooterLinks onNavigate={onNavigate} />
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default function AboutUsPage({ onNavigate }: NavigationProps) {
  return (
    <div className="min-h-screen">
      <AboutHeroSection onNavigate={onNavigate} />
      <AboutContentSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}