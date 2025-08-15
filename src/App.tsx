import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { GradientGallery } from "./components/GradientGallery";
import { ColorDetailModal } from "./components/ColorDetailModal";
import { SingleGradientPage } from "./components/SingleGradientPage";

interface Gradient {
  id: string;
  name: string;
  colors: string[];
  description: string;
  direction: string;
}

const gradients: Gradient[] = [
  {
    id: "1",
    name: "Ocean Sunset",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
    description:
      "A warm sunset reflecting on ocean waves, blending coral pinks with deep teals.",
    direction: "135deg",
  },
  {
    id: "2",
    name: "Purple Dream",
    colors: ["#667eea", "#764ba2"],
    description:
      "A mystical purple gradient that evokes dreams and imagination.",
    direction: "90deg",
  },
  {
    id: "3",
    name: "Citrus Burst",
    colors: ["#FF9a8B", "#FECFEF", "#FECFEF"],
    description:
      "Fresh and vibrant like a summer citrus drink, energizing and bright.",
    direction: "45deg",
  },
  {
    id: "4",
    name: "Forest Mist",
    colors: ["#134E5E", "#71B280"],
    description:
      "Deep forest greens emerging from morning mist, calm and natural.",
    direction: "180deg",
  },
  {
    id: "5",
    name: "Royal Gold",
    colors: ["#f7931e", "#ffd200", "#ffed4e"],
    description: "Rich golden hues fit for royalty, luxurious and warm.",
    direction: "135deg",
  },
  {
    id: "6",
    name: "Cherry Blossom",
    colors: ["#ffecd2", "#fcb69f"],
    description: "Soft pink tones reminiscent of cherry blossoms in spring.",
    direction: "90deg",
  },
  {
    id: "7",
    name: "Arctic Aurora",
    colors: ["#667eea", "#764ba2", "#f093fb"],
    description:
      "Cool blues and purples like the northern lights dancing across the sky.",
    direction: "45deg",
  },
  {
    id: "8",
    name: "Ember Glow",
    colors: ["#ee0979", "#ff6a00"],
    description: "Intense reds and oranges like glowing embers in a fireplace.",
    direction: "180deg",
  },
];

export default function App() {
  const [selectedGradient, setSelectedGradient] = useState<Gradient | null>(
    null
  );
  const [currentView, setCurrentView] = useState<"gallery" | "single">(
    "gallery"
  );
  const [singlePageGradient, setSinglePageGradient] = useState<Gradient | null>(
    null
  );

  const handleGradientClick = (gradient: Gradient) => {
    setSelectedGradient(gradient);
  };

  const handleCloseModal = () => {
    setSelectedGradient(null);
  };

  const handleViewFullPage = (gradient: Gradient) => {
    setSelectedGradient(null);
    setSinglePageGradient(gradient);
    setCurrentView("single");
  };

  const handleBackToGallery = () => {
    setCurrentView("gallery");
    setSinglePageGradient(null);
  };

  if (currentView === "single" && singlePageGradient) {
    return (
      <SingleGradientPage
        gradient={singlePageGradient}
        onBack={handleBackToGallery}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <GradientGallery
        gradients={gradients}
        onGradientClick={handleGradientClick}
      />

      <AnimatePresence>
        {selectedGradient && (
          <ColorDetailModal
            gradient={selectedGradient}
            onClose={handleCloseModal}
            onViewFullPage={handleViewFullPage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
