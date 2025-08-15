import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Gradient {
  id: string;
  name: string;
  colors: string[];
  description: string;
  direction: string;
}

interface SingleGradientPageProps {
  gradient: Gradient;
  onBack: () => void;
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function ColorSwatch({ color, index }: { color: string; index: number }) {
  const rgb = hexToRgb(color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="flex items-center gap-4"
    >
      <div
        className="w-16 h-16 rounded-lg border border-white/20"
        style={{ backgroundColor: color }}
      />
      <div className="flex-1">
        <p className="text-white/90 mb-1">{color.toUpperCase()}</p>
        {rgb && (
          <p className="text-white/60 text-sm">
            RGB({rgb.r}, {rgb.g}, {rgb.b})
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function SingleGradientPage({
  gradient,
  onBack,
}: SingleGradientPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        onClick={onBack}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Gallery
      </motion.button>

      {/* Centered gradient card */}
      <motion.div
        layoutId={`gradient-${gradient.id}`}
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(${
            gradient.direction
          }, ${gradient.colors.join(", ")})`,
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative h-64 md:h-80" />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-black/20 backdrop-blur-sm p-8 space-y-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white mb-3"
            >
              {gradient.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-white/80"
            >
              {gradient.description}
            </motion.p>
          </div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/90 text-sm uppercase tracking-wider"
            >
              Color Palette
            </motion.h2>
            <div className="space-y-4">
              {gradient.colors.map((color, index) => (
                <ColorSwatch key={color} color={color} index={index} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-4 border-t border-white/20 space-y-4"
          >
            <div>
              <h3 className="text-white/90 text-sm mb-2">CSS Code</h3>
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                <code className="text-white/80 text-xs break-all">
                  background: linear-gradient({gradient.direction},{" "}
                  {gradient.colors.join(", ")});
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-white/90 text-sm mb-2">Gradient Info</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/60">Direction:</span>
                  <span className="text-white/90 ml-2">
                    {gradient.direction}
                  </span>
                </div>
                <div>
                  <span className="text-white/60">Colors:</span>
                  <span className="text-white/90 ml-2">
                    {gradient.colors.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
