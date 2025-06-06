
import { motion } from "framer-motion";

interface GradientBlurProps {
  color1?: string;
  color2?: string;
  positionClass?: string;
}

const GradientBlur = ({ 
  color1 = "#b400ff", 
  color2 = "#00f0ff", 
  positionClass = "top-0 right-0" 
}: GradientBlurProps) => {
  return (
    <motion.div
      className={`gradient-blur w-[30rem] h-[30rem] ${positionClass}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`,
      }}
    />
  );
};

export default GradientBlur;
