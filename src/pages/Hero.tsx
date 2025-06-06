import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import GradientBlur from "../components/GradientBlur";
import ThreeDIcon from "../components/ThreeDIcon";
import AnimatedButton from "../components/AnimatedButton";
import AnimatedPage from "../components/AnimatedPage";
import { ArrowDownCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <AnimatedPage>
      <section className="fullpage-section bg-background">
        {/* Background effects */}
        <ParticleBackground />
        <GradientBlur color1="#b400ff" color2="#00f0ff" positionClass="top-20 right-20" />
        <GradientBlur color1="#ff00c3" color2="#00f0ff" positionClass="bottom-20 left-20" />

        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div 
            className="w-full md:w-3/5 text-center md:text-left mb-12 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h2 
              className="text-lg md:text-xl text-neon-blue font-medium mb-4"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text"
              variants={itemVariants}
            >
              <span className="text-gradient">Dhivya G</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Backend Developer & Computer Science Student
            </motion.p>
            
            <motion.p 
              className="text-base md:text-lg text-gray-400 mb-10 max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              A 3rd-year BE Computer Science student with expertise in Node.js, Express.js, and MongoDB.
              Building robust backend solutions and RESTful APIs with a focus on clean code and best practices.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link to="/contact">
                <AnimatedButton color="purple" size="lg">
                  Hire Me
                </AnimatedButton>
              </Link>
              <Link to="/projects">
                <AnimatedButton color="blue" size="lg" className="bg-opacity-20 backdrop-blur-lg border border-blue-500/30">
                  View Projects
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-2/5 flex justify-center md:justify-end"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <ThreeDIcon color="#b400ff" size={2} position={[0, 0, 0]} />
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 md:w-48 md:h-48"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <ThreeDIcon color="#00f0ff" size={1.2} position={[0, 0, 0]} distort={0.3} />
              </motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-28 h-28 md:w-32 md:h-32"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <ThreeDIcon color="#ff00c3" size={0.8} position={[0, 0, 0]} distort={0.5} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors">
            <ArrowDownCircle size={32} />
          </Link>
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default Hero;
