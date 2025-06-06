import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import GradientBlur from "../components/GradientBlur";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedButton from "../components/AnimatedButton";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dhivyag082@gmail.com",
      link: "mailto:dhivyag082@gmail.com"
    },
    {
      icon: Phone,
      title: "GitHub",
      value: "github.com/dhivyaG082",
      link: "https://github.com/dhivyaG082"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "K.S.Rangasamy College of Technology",
      link: "https://maps.google.com/?q=K.S.Rangasamy+College+of+Technology"
    }
  ];

  const inputClasses = "w-full px-4 py-3 bg-muted border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue text-white";

  return (
    <AnimatedPage>
      <section className="fullpage-section bg-background py-20">
        <ParticleBackground />
        <GradientBlur color1="#b400ff" color2="#00f0ff" positionClass="top-20 left-20" />
        <GradientBlur color1="#ff00c3" color2="#00f0ff" positionClass="bottom-20 right-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.title === "Location" ? "_blank" : undefined}
                rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                className="p-6 rounded-xl bg-glass flex flex-col items-center justify-center hover:border-neon-blue border border-transparent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4 text-neon-blue">
                  <info.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-400 text-center">{info.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient text-center">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  <AnimatedButton 
                    color="purple" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </AnimatedButton>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
