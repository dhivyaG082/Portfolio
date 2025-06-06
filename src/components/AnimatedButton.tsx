
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  color?: "purple" | "blue" | "green";
  size?: "sm" | "lg" | "default";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const AnimatedButton = ({ 
  children, 
  color = "purple", 
  size = "default", 
  className,
  onClick,
  disabled = false,
  ...props 
}: AnimatedButtonProps) => {
  const colorClasses = {
    purple: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    blue: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
    green: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden font-semibold text-white border-0 shadow-lg",
          colorClasses[color],
          className
        )}
        size={size}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-white opacity-0"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;
