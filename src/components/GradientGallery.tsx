import { motion } from "framer-motion";

interface Gradient {
  id: string;
  name: string;
  colors: string[];
  description: string;
  direction: string;
}

interface GradientGalleryProps {
  gradients: Gradient[];
  onGradientClick: (gradient: Gradient) => void;
}

export function GradientGallery({
  gradients,
  onGradientClick,
}: GradientGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
      {gradients.map((gradient) => (
        <motion.div
          key={gradient.id}
          className="aspect-[3/2] rounded-lg cursor-pointer overflow-hidden"
          style={{
            background: `linear-gradient(${
              gradient.direction
            }, ${gradient.colors.join(", ")})`,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onGradientClick(gradient)}
          layoutId={`gradient-${gradient.id}`}
        />
      ))}
    </div>
  );
}
