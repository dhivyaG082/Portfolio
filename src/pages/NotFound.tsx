
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import GradientBlur from "../components/GradientBlur";
import AnimatedButton from "../components/AnimatedButton";
import AnimatedPage from "../components/AnimatedPage";

const NotFound = () => {
  return (
    <AnimatedPage>
      <section className="fullpage-section bg-background">
        <ParticleBackground />
        <GradientBlur color1="#b400ff" color2="#00f0ff" positionClass="top-20 right-20" />
        <GradientBlur color1="#ff00c3" color2="#00f0ff" positionClass="bottom-20 left-20" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-9xl md:text-[12rem] font-bold text-gradient glow-text mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 mb-10 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/">
              <AnimatedButton color="blue" size="lg">
                Return to Home
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default NotFound;
