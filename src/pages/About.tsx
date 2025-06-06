import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import GradientBlur from "../components/GradientBlur";
import AnimatedPage from "../components/AnimatedPage";
import ThreeDIcon from "../components/ThreeDIcon";
import { Link } from "react-router-dom";

const About = () => {
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

  const achievements = [
    { title: "8.42", subtitle: "CGPA" },
    { title: "3+", subtitle: "Projects" },
    { title: "3+", subtitle: "Certifications" },
    { title: "3rd", subtitle: "Year Student" },
  ];

  return (
    <AnimatedPage>
      <section className="fullpage-section bg-background py-20">
        <ParticleBackground />
        <GradientBlur color1="#00f0ff" color2="#b400ff" positionClass="top-20 left-20" />
        <GradientBlur color1="#ff00c3" color2="#00f0ff" positionClass="bottom-20 right-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <motion.div 
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-glass">
                {/* Professional Photo Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48">
                    <ThreeDIcon color="#00f0ff" size={2} position={[0, 0, 0]} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20">
                  <ThreeDIcon color="#ff00c3" size={0.8} position={[0, 0, 0]} />
                </div>
                <div className="absolute bottom-4 left-4 w-24 h-24">
                  <ThreeDIcon color="#b400ff" size={1} position={[0, 0, 0]} />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-3/5"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4 text-neon-blue glow-text"
                variants={itemVariants}
              >
                Backend Developer & Computer Science Student
              </motion.h3>

              <motion.p 
                className="text-gray-300 mb-4"
                variants={itemVariants}
              >
                I'm Dhivya G, a 3rd-year BE Computer Science student at K.S.Rangasamy College of Technology with a CGPA of 8.42/10. I specialize in backend development using Node.js, Express.js, and MongoDB, with a strong focus on building robust RESTful APIs and database management.
              </motion.p>

              <motion.p 
                className="text-gray-300 mb-6"
                variants={itemVariants}
              >
                My expertise includes developing full-stack applications, implementing CRUD operations, and creating efficient database solutions. I've worked on various projects including a Recipe Blog Application, Portfolio Project, and an Automatic Car Parking System using IoT technologies.
              </motion.p>

              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8"
                variants={itemVariants}
              >
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg bg-glass text-center"
                  >
                    <h4 className="text-3xl font-bold text-gradient">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.subtitle}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                className="flex gap-6 flex-wrap"
                variants={itemVariants}
              >
                <Link to="/skills" className="text-neon-blue hover:text-neon-purple transition-colors underline">
                  My Skills
                </Link>
                <Link to="/projects" className="text-neon-blue hover:text-neon-purple transition-colors underline">
                  View Portfolio
                </Link>
                <a 
                  href="/Resume_Dhivya.pdf" 
                  download="Dhivya_G_Resume.pdf"
                  className="text-neon-blue hover:text-neon-purple transition-colors underline"
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
