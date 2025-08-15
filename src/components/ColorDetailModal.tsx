import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface Gradient {
  id: string;
  name: string;
  colors: string[];
  description: string;
  direction: string;
}

interface ColorDetailModalProps {
  gradient: Gradient | null;
  onClose: () => void;
  onViewFullPage?: (gradient: Gradient) => void;
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
      transition={{ delay: 0.1 + index * 0.1 }}
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

export function ColorDetailModal({
  gradient,
  onClose,
  onViewFullPage,
}: ColorDetailModalProps) {
  if (!gradient) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        layoutId={`gradient-${gradient.id}`}
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(${
            gradient.direction
          }, ${gradient.colors.join(", ")})`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4"
        >
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-black/20 backdrop-blur-sm p-6 space-y-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white mb-2"
            >
              {gradient.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-white/70 text-sm"
            >
              {gradient.description}
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/90 text-sm uppercase tracking-wider"
            >
              Colors
            </motion.h3>
            {gradient.colors.map((color, index) => (
              <ColorSwatch key={color} color={color} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-2 border-t border-white/20"
          >
            <p className="text-white/60 text-xs">
              CSS: background: linear-gradient({gradient.direction},{" "}
              {gradient.colors.join(", ")});
            </p>
          </motion.div>

          {onViewFullPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <button
                onClick={() => onViewFullPage(gradient)}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Page
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
